const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/Images");
    },
    filename: (req, file, cb) => {
        const nameFormat = `${Date.now()}-${req.body.product_name.replace(/ /g, "_")}${path.extname(file.originalname)}`;
        cb(null, nameFormat);
    },
});

const limits = {
    fileSize: 1 * 1000 * 1000 //1MB
}

const fileFilter = (req, file, cb) => {
    const fileTypes = /jpg|jpeg|png|gif/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    if (extName) {
        cb(null, true)
    } else {
        cb("Error : Images only..!");
    }
}

const upload = multer({
    storage,
    limits,
    fileFilter
});

const uploadFile = {
    singleUpload: (req, res, next) => {
        const singleUpload = upload.single("image");
        singleUpload(req, res, (err) => {
            if (err) {
                res.json({ msg: err })
            } else {
                req.body.image = `${process.env.API_URL}Images/${req.file.filename}`;
                next();
            }
        })
    },
};

module.exports = uploadFile;