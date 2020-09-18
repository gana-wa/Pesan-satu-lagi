const express = require("express");

const productRouter = express.Router();

const productController = require("../Controllers/products");
const uploadFile = require('../Helpers/Middleware/uploadFile');

// get all product
productRouter.get("/", productController.getAllProducts);
productRouter.get("/category/:category_name", productController.getProductByCategory);
// get with pagination
productRouter.get("/pagination", productController.getPaginatedProducts);
// insert product
productRouter.post("/", uploadFile.singleUpload, productController.postNewProduct);
// get with sorting
productRouter.get("/sort", productController.sortProducts);
// update product
productRouter.patch("/:product_id", productController.updateProduct);
// delete product
productRouter.delete("/:product_id", productController.deleteProduct);
// search product by
productRouter.get("/search", productController.searchProductByName);

module.exports = productRouter;