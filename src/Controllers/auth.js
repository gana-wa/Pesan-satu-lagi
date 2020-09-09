const authModel = require('../Models/authModel');
const formRespone = require('../Helpers/Forms/formRespone');

const authController = {
    register: (req, res) => {
        authModel
            .postNewUser(req.body)
            .then((data) => {
                const responeObj = {
                    msg: `Register ${req.body.username} successfull..!`
                }
                formRespone.success(res, responeObj);
            })
            .catch((err) => {
                formRespone.error(res, err);
            })
    },
    login: (req, res) => {
        authModel
            .loginUser(req.body)
            .then((data) => {
                formRespone.success(res, data)
            })
            .catch((err) => {
                formRespone.error(res, err)
            })
    }
}

module.exports = authController;