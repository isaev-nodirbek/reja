console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});
// app.get("/hello", function (req, res) {
//   res.end("<h1>HELLO WORLD</h1>");
// });
// app.get("/gift", function (req, res) {
//   res.end("<h1>You are in gifts page</h1>");
// });
app.get("/", function (req, res) {
  res.render("harid");
});
const server = http.createServer(app);
let PORT = 8080;
server.listen(PORT, function () {
  console.log(`The serevr is running successfully on port: ${PORT}`);
});
