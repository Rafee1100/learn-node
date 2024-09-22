/**
 * title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or downtime user defined links
 * Author:Abdullah Al Rafee
 */

// Dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environments");
const data = require("./lib/data")
// app object= module scaffolding
const app = {};

//testing file system
// @TODO: Pore muche dibo

data.create('test', 'newFile', { 'name': 'Bangladesh', 'language': 'Bangla' }, function (err) {
  console.log('Error was', err)
})

data.read('test', 'newFile', (err, data) => {
  console.log(err, data)
})

data.update('test', 'newFile', { 'name': 'United States', 'language': 'English' }, function (err, data) {
  console.log('Error was', err)
})
data.delete('test', 'newFile', function (err, data) {
  console.log('Error was', err)
})

//configuration
app.config = {};

//create server

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`Listening to ${environment.port}`);
  });
};
app.handleReqRes = handleReqRes;
//handle Request Response

app.createServer();
