const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter.js");
const msgRouter = require("./routes/msgRouter.js");
const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", indexRouter);
app.use("/new", msgRouter);

app.listen(PORT, () => console.log(`Server listens on localhost:${PORT}`))