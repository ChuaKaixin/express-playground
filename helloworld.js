const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`Hello, i got a ${req.method} request`);
});

app.put("/", (req, res) => {
  res.send(`Hello, i got a ${req.method} request`);
});

app.delete("/", (req, res) => {
  res.send(`Hello, i got a ${req.method} request`);
});

const server = app.listen(PORT, () => {
  console.log(`You're listening to the smooth sounds of port ${PORT}...`);
});
