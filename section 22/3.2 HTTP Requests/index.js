import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.send("Hello World!");
})
app.get("/contact", (req, res) => {
    res.send("<h2>+256-769-055-233</h2>");
})
app.get("/about", (req, res) => {
    res.send("<em>kajjabwangulester@2026, Japan ,Osaka</em>");
})

app.listen(port, () => {
    console.log("Listening on Port 8000")
})