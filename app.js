const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

server.listen(3000, function (req, res) {
  console.log("server is running on port 3000");
});
