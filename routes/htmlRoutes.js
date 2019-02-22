var path = require("path");


//HTML Get requests
//handles users visiting the page
module.exports = function(app) {
    app.get("/tables", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });
    app.get("/reserve", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/add.html"));
    });
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};