const productModel = require("../Models/products");
const formRespone = require("../Helpers/Forms/formRespone");

const productController = {
    // GET 
    getAllProducts: (_, res) => {
        productModel
            .getAllProducts()
            .then((data) => {
                formRespone.success(res, data);
            })
            .catch((err) => {
                formRespone.error(res, err);
            })
    },
    getProductByCategory: (req, res) => {
        productModel
            .getProductByCategory(req.params.category_name)
            .then((data) => {
                formRespone.success(res, data);
            })
            .catch((err) => {
                formRespone.error(res, err);
            })
    },
    // GET PAGINATED
    getPaginatedProducts: (req, res) => {
        const { page, limit } = req.query;
        productModel
            .getPaginatedProducts(page, limit)
            .then((data) => {
                formRespone.pagination(req, res, data);
            })
            .catch((err) => {
                formRespone.error(res, err);
            })
    },
    // GET SORTING
    sortProducts: (req, res) => {
        productModel
            .sortProducts(req.query)
            .then((data) => {
                formRespone.success(res, data);
            })
            .catch((err) => {
                formRespone.error(res, err);
            })
    },
    // SEARCH
    searchProductByName: (req, res) => {
        productModel
            .searchProductByName(req.query)
            .then((data) => {
                formRespone.success(res, data);
            })
            .catch((err) => {
                formRespone.error(res, err);
            })
    },
    // POST
    postNewProduct: (req, res) => {
        productModel
            .postNewProduct(req.body)
            .then((data) => {
                const responseObj = {
                    msg: "New product successfully added..!",
                    product_id: data.insertId,
                    ...req.body
                }
                formRespone.success(res, responseObj);
            })
            .catch((err) => {
                formRespone.error(res, err);
            })
    },
    // UPDATE
    updateProduct: (req, res) => {
        productModel
            .updateProduct(req.params.product_id, req.body)
            .then((data) => {
                const responseObj = {
                    msg: "Successfully updated..!",
                    product_id: data.insertId,
                    ...req.body
                }
                formRespone.success(res, responseObj);
            })
            .catch((err) => {
                formRespone.error(res, err);
            })
    },
    // DELETE
    deleteProduct: (req, res) => {
        productModel
            .deleteProduct(req.params.product_id)
            .then((data) => {
                const responseObj = {
                    msg: `Product with id: ${req.params.product_id} successfully deleted..!`
                }
                formRespone.success(res, responseObj);
            })
            .catch((err) => {
                formRespone.error(res, err);
            })
    },
}

module.exports = productController;