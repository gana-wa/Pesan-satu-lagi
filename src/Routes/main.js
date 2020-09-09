const express = require("express");

const mainRouter = express.Router();

const mainController = require("../Controllers/main");

mainRouter.get("/", mainController.sayHello);
mainRouter.post("/",mainController.testBody);

module.exports = mainRouter;