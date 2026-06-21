const express = require("express");
const app = express();
const port = 5501;

app.use(express.static("public)"));

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/index.html");
});

app.get("/contact", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/contact.html");
});

app.listen(port, () => {
  //console.log(`Servidor escuchando en http://localhost:${port}`);
  console.log(`Servidor escuchando en http://127.0.0.1:${port}`);
});
