const messages = require("../models/messages.js");

const getHomePage = (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
};

module.exports = { getHomePage };