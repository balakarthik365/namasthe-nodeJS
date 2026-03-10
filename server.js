const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/getSecretData") {
    res.end("This is no secret data");
  }
  res.end("Hello world");
});

server.listen(3000);
