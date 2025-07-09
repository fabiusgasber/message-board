const getHomePage = (req, res) => {
    res.render("index", { user: "John" });
} 

module.exports = { getHomePage };