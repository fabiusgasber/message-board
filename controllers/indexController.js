const db = require("../models/queries.js");

const getHomePage = async (req, res) => {
    const messages = await db.getAllMessages();
    res.render("index", { title: "Mini Messageboard", messages: messages });
};

const getMessageForm = (req, res) => {
    res.render("form");
};

const createMessage = async (req, res) => {
    await db.insertMessage({ text: req.body.msg, username: req.body.user, added: new Date() });
    res.redirect("/");
};

const getMessageDetails = async (req, res) => {
    const { index } = req.params;
    const messages = await db.findMessage(Number(index));
    if(!messages && !messages.length){
        res.status(404).send("Message not found");
        return;
    }
    res.render("message", { messages: messages });
}

module.exports = { getHomePage, getMessageForm, createMessage, getMessageDetails };