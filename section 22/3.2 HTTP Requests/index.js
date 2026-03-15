import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send(req);
})

app.listen(8000, () => {
    console.log("Listening on Port 3000")
})