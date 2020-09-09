const uploadRouter = require('express').Router();
const uploadController = require('../Controllers/upload');

uploadRouter.post("/single", uploadController.singleUpload, (req, res) => {
    res.json({ imageURI: `/Images/${req.file.filename}` })
});

module.exports = uploadRouter;