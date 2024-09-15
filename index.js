/**
 * title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or downtime user defined links
 * Author:Rafee
 */

const http = require("http");
const url = require("url");

// app object= module scaffolding
const app = {};

//configuration
app.config = {
  port: 5000,
};

//create server

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`Listening to ${app.config.port}`);
  });
};

//handle Request Response
app.handleReqRes = (req, res) => {
  //request handling
  //get that url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\?+$/g, "");
  const method = req.method.toLowerCase()
  const queryString = parsedUrl.query
  const headers = req.headers
  console.log(headers)
  //response handle
  res.end("Hello World");
};

app.createServer();
