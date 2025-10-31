import express from "express";
const app = express();
const PORT = 10000;
app.get("/", (req, res) => { res.send("Hello, world!"); });
app.listen(PORT, () => { console.log(`Server running at http://localhost:${PORT}`); });