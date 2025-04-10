const express = require("express");
const dbJson = require('./items-db.json');

const app = express();

app.use("/images", express.static("public"));
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(3000,
    () => {
        console.log("Server listening on port 3000...");
    }
);

app.get("/list", (request, response) => {
    console.log("GET: /list received @ " + (new Date(Date.now())).toISOString());
    response.send(dbJson);
})