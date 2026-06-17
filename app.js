const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/index.html");
});
app.get("/contact", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/contact.html");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
