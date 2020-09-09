const express = require("express");

const transactionRouter = express.Router();

const transactionController = require("../Controllers/transaction");

// POST
transactionRouter.post("/",transactionController.addTransaction);

module.exports = transactionRouter;