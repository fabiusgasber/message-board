const { Router } = require("express");
const { getHomePage, getMessageForm, createMessage, getMsgDetails } = require("../controllers/indexController.js");
const router = Router();

router.get("/", getHomePage)
router.get("/new", getMessageForm);
router.post("/new", createMessage);
router.get("/message/:index", getMsgDetails);

module.exports = router;