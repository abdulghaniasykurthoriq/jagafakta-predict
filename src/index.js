const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;
const predictRoute = require("./routes/predictRoute.js");

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/api", predictRoute);

// Dummy data
let predicts = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

// Routes
app.get("/api/predicts", (req, res) => {
  res.json(predicts);
});

app.get("/api/predicts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = predicts.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.post("/api/predicts", (req, res) => {
  const newItem = {
    id: predicts.length + 1,
    name: req.body.name,
  };
  predicts.push(newItem);
  res.status(201).json(newItem);
});

app.put("/api/predicts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = predicts.findIndex((item) => item.id === id);
  if (index !== -1) {
    predicts[index].name = req.body.name;
    res.json(predicts[index]);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.delete("/api/predicts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = predicts.findIndex((item) => item.id === id);
  if (index !== -1) {
    const deletedItem = predicts.splice(index, 1);
    res.json(deletedItem);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
