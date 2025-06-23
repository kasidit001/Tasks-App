const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  app.send("Hello");
});

app.post("/", (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("Start server is port 3000");
});
