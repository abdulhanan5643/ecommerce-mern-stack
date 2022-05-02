require("dotenv").config();
const path = require("path");
const express = require("express");
const { port } = require("./commonVariables/commonVariables");

const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  const greetings =
    "Congratulations. You're successfully connected to backend.";
  res.send(greetings);
});

app.use(express.static(path.resolve(__dirname, "../client/build")));
// All other GET requests not handled before will return our React app
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}...`);
});
