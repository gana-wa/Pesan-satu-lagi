const categoryModel = require("../Models/category");
const formRespone = require("../Helpers/Forms/formRespone");

const categoryController = {
    // GET
    getAllCategory: (_, res) => {
        categoryModel
            .getAllCategory()
            .then((data) => {
                formRespone.success(res, data);
            })
            .catch((err) => {
                formRespone.error(res, err);
            })
    },
    // POST
    postCategory: (req, res) => {
        categoryModel
            .postCategory(req.body)
            .then((data) => {
                const responseObj = {
                    category_id: data.insertId,
                    ...req.body
                }
                formRespone.success(res, responseObj);
            })
            .catch((err) => {
                formRespone.error(res, err);
            })
    },
    // UPDATE
    updateCategory: (req, res) => {
        categoryModel
            .updateCategory(req.body)
            .then((data) => {
                const responseObj = {
                    msg: "Successfully updated",
                    category_id: data.insertId,
                    ...req.body
                }
                formRespone.success(res, responseObj);
            })
            .catch((err) => {
                formRespone.error(res, err);
            })
    },
    // DELETE
    deleteCategory: (req, res) => {
        categoryModel
            .deleteCategory(req.params.category_id)
            .then((data) => {
                const responseObj = {
                    msg: `Category with id: ${req.params.category_id} successfully deleted..!`
                }
                formRespone.success(res, responseObj);
            })
            .catch((err) => {
                formRespone.error(res, err);
            })
    }
}

module.exports = categoryController;