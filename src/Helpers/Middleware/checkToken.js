const jwt = require('jsonwebtoken');
const formResponse = require('../Forms/formRespone');

const checkToken = {
    checkLogin: (req, res, next) => {
        const bearerToken = req.header("x-access-token");
        if (!bearerToken) {
            res.json({
                msg: "Please login first..!",
            })
        }
        try {
            const token = bearerToken.split(" ")[1];
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.decodedToken = decoded;
            next();
        } catch (e) {
            formResponse.error(res, e);
        }
    },
    checkAdmin: (req, res, next) => {
        const bearerToken = req.header("x-access-token");
        if (!bearerToken) {
            res.json({
                msg: "Please login first..!",
            })
        }
        try {
            const token = bearerToken.split(" ")[1];
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            console.log(decoded.level_id);
            if (Number(decoded.level_id) === 1) {
                req.decodedToken = decoded;
                next();
            } else {
                res.json({
                    msg: "Only admin can operate this..!"
                })
            }
        } catch (e) {
            formResponse.error(res, e);
        }
    }
}

module.exports = checkToken;