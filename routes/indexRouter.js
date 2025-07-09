const { Router } = require("express");
const { getHomePage, getMessageForm, createMessage } = require("../controllers/indexController.js");
const router = Router();

router.get("/", getHomePage)
router.get("/new", getMessageForm);
router.post("/new", createMessage);

module.exports = router;