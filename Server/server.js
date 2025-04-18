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
        setInterval(virtualBid, 5000);
        console.log("Server listening on port 3000...");
    }
);

app.get("/list", (request, response) => {
    console.log("GET: /list received @ " + (new Date(Date.now())).toISOString());
    response.send(dbJson);
})

app.post("/bid", (request, response) => {
    console.log("POST: /list received @ " + (new Date(Date.now())).toISOString());
    const id = request.query.id;
    console.log("id = " + id);

    const newBid = request.query.newbid;
    console.log("newBid = " + newBid)    

    const newBidUser = request.query.newbiduser;
    console.log("newBidUser = " + newBidUser);

    response.send("OK");
})

function virtualBid() {
    
    dbJson.forEach((item) => {
        
        const increase = Math.random() * 2;
        item.lastBid *= Number(1.0 + (increase / 100));
        item.lastBidUser = "anonymous";
    })
}