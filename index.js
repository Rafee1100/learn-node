/**
 * title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or downtime user defined links
 * Author:Abdullah Al Rafee
 */

// Dependencies
const url = require("url");
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
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
app.handleReqRes = handleReqRes;
//handle Request Response

app.createServer();
