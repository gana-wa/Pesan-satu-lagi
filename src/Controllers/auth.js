const authModel = require('../Models/authModel');
const formRespone = require('../Helpers/Forms/formRespone');

const authController = {
    register: (req, res) => {
        authModel
            .postNewUser(req.body)
            .then((data) => {
                // const responeObj = {
                //     msg: `${req.body.name} berhasil didaftarkan..!`
                // }
                formRespone.success(res, data);
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
    },
    editUser: (req, res) => {
        authModel
            .editUser(req.params.id, req.body)
            .then((data) => {
                const responseObj = {
                    msg: "Successfully updated..!",
                    ...req.body
                }
                formRespone.success(res, responseObj);
            })
            .catch((err) => {
                formRespone.error(res, err);
            })
    },
}

module.exports = authController;