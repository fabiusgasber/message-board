const { Router } = require("express");
const { getHomePage, getMessageForm, createMessage, getMessageDetails } = require("../controllers/indexController.js");
const router = Router();

router.get("/", getHomePage)
router.get("/new", getMessageForm);
router.post("/new", createMessage);
router.get("/message/:index", getMessageDetails);

module.exports = router;