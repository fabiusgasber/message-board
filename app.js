const express = require("express");
const path = require("node:path");
const router = require("./routes/indexRouter.js");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", router);

app.listen(PORT, () => console.log(`Server listens on localhost:${PORT}`))