/**
 * title: Handle Request Response
 * Description: Handle Request Response
 * Author:Abdullah Al Rafee
 */

// Dependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes");
const {
  notFoundHandler,
} = require("../handlers/routeHandlers/notFoundHandler");
const { parse } = require("path");

//module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  //request handling
  //get that url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');
  const method = req.method.toLowerCase();
  const queryString = parsedUrl.query;
  const headers = req.headers;
  const requestProperties = {
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryString,
    headers,
  };
  const decoder = new StringDecoder("utf-8");
  let realData = "";

  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });
  req.on("end", () => {
    realData += decoder.end();
    chosenHandler(requestProperties, (statusCode, payload) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payload = typeof payload === "object" ? payload : {};

      const payloadString = JSON.stringify(payload);
      res.writeHead(statusCode);
      res.end(payloadString);
    });
    console.log(realData);
    res.end("Hello World");
  });
  //response handle
};

module.exports = handler;
