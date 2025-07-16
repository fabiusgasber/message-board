const pool = require("./pool.js");

const getAllMessages = async () => {
    const { rows } = await pool.query('SELECT * FROM messages');
    return rows;
}

const insertMessage = async (message) => {
    const { text, username, added } = message;
    await pool.query('INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)', [text, username, added]);
};

const findMessage = async (index) => {
    const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [index]);
    return rows;
}

module.exports = {
    getAllMessages,
    insertMessage,
    findMessage,
}