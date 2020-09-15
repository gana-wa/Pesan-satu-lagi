const express = require("express");

const historyRouter = express.Router();

const historyController = require("../Controllers/history");

// GET
historyRouter.get("/", historyController.showAllHistory);
historyRouter.get("/history/show", historyController.showHistory);
historyRouter.get("/invoice/:invoice", historyController.showHistoryByInvoice);
historyRouter.get("/name/:name", historyController.showHistoryByName);

module.exports = historyRouter;