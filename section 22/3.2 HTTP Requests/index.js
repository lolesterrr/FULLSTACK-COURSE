import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.send(req);
})

app.listen(port, () => {
    console.log("Listening on Port 3000")
})