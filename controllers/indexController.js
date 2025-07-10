const messages = require("../models/messages.js");

const getHomePage = (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
};

const getMessageForm = (req, res) => {
    res.render("form");
}

const createMessage = (req, res) => {
    messages.push({ text: req.body.msg, user: req.body.user, added: new Date() });
    res.redirect("/");
};

const getMsgDetails = (req, res) => {
    const { index } = req.params;
    const message = messages[Number(index)];
    if(!message){
        res.status(404).send("Message not found");
        return;
    }
    res.render("message", { message: message });
}

module.exports = { getHomePage, getMessageForm, createMessage, getMsgDetails };