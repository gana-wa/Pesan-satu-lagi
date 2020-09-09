// PACKAGE IMPORT
const express = require("express");
// FILEPATH IMPORT
const mainRouter = require("./main");
const productRouter = require("./products");
const categoryRouter = require("./category");
const transactionRouter = require("./transaction");
const historyRouter = require("./history");
const authRouter = require('./auth');
const uploadRouter = require('./upload');

// DEKLARASI
const indexRouter = express.Router();
// IMPLEMENTASI
// PUBLIC ROUTE
indexRouter.use("/", mainRouter);
indexRouter.use("/products", productRouter);
indexRouter.use("/transaction", transactionRouter);
indexRouter.use("/history", historyRouter);
indexRouter.use("/auth", authRouter);
indexRouter.use("/upload", uploadRouter);
// PRIVATE ROUTE
indexRouter.use("/category", categoryRouter);


// EXPORT
module.exports = indexRouter;