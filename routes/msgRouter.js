const { Router } = require("express");
const { getMessageForm } = require("../controllers/msgController.js");
const msgRouter = Router();

msgRouter.get("/", getMessageForm);

module.exports = msgRouter;