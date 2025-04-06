const express = require("express");

const app = express();

app.listen(3000,
    () => {
        console.log("Server listening on port 3000...");
    }
);

app.get("/", (request, response) => {
    response.send("Hello from Server")
})