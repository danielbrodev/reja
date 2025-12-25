console.log("Express ishga tushdi");

const express = require("express");
const http = require("http");
const app = express();
//Middleware — bu Express’da 👉 request (so‘rov) bilan response (javob) orasida ishlaydigan funksiya.
//1: Kirish code
//Statik fayllarni (o‘zgarmaydigan fayllar) brauzerga berish uchun middleware
app.use(express.static("public"));
//express.json() nima?👉 JSON formatda kelgan ma’lumotni o‘qish uchun middleware
app.use(express.json());
// urlencoded frntendan kelayotgan datani js ichida oddiy js object req.body otkizib oladi
app.use(express.urlencoded({ extended: true }));

//2: Session code
//3: Views code
//Express’da EJS orqali HTML chiqarish (render) uchun sozlama
app.set("views", "views");
app.set("view engine", "ejs");
//4: Routing code
// app.get('/',function(req,res){
//     res.end("Hello World")
// })
// app.get('/gift',function(req,res){
//     res.end("Siz sovgalar bolimidasiz")
// })

app.post("/create-item", function (req, res) {
  console.log(req.body);
  res.json({value:req.body.item})
  
});

app.get("/", function (req, res) {
  res.render("harid");
});

const PORT = 3000;
const server = http.createServer(app);
server.listen(PORT, function () {
  console.log(`Server ishga tushdi http://localhost:${PORT}`);
});
