const express = require("express");

const categoryRouter = express.Router();

const categoryController = require("../Controllers/category");
const checkToken = require('../Helpers/Middleware/checkToken');

// GET
categoryRouter.get("/", categoryController.getAllCategory);
// POST
categoryRouter.post("/", categoryController.postCategory);
// UPDATE
categoryRouter.patch("/", categoryController.updateCategory);
// DELETE
categoryRouter.delete("/:category_id", categoryController.deleteCategory);

module.exports = categoryRouter;