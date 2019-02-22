var tableData = require("../data/tableData");
var waitListData = require("../data/waitingList");

module.exports = (app) => {
    //api get requests
    app.get("/api/tables", (req, res) => {
        res.json(tableData);
    });

    app.get("api/waitlist", (req, res) => {
        res.json(waitListData);
    });

    //api post requests
    app.post("/api/tables", (req, res) => {
        if(tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        }
        else {
            waitListData.push(req.body);
            res.json(false);
        };
    });

    //clears arrays
    app.post("/api/clear"), (req, res) => {
        tableData.length = [];
        waitListData.length = [];

        res.json({ ok: true });
    };
};