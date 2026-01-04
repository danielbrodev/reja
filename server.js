const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://diyoruz:diyorbek8850@cluster0.vsykkgf.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopolgy: true,
  },
  (err, client) => {
    if (err) console.log("Error on connection MongoDB");
    else {
      console.log("MongoDB connection MongoDB");
      // console.log(client);
      module.exports = client;

      const app = require("./app");
      const PORT = 3000;
      const server = http.createServer(app);
      server.listen(PORT, function () {
        console.log(`Server ishga tushdi http://localhost:${PORT}`);
      });
    }
  }
);
