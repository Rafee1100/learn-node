/**
 * title: Routes
 * Description: Application routes
 * Author:Abdullah Al Rafee
 */
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandlers");
const routes = {
  sample: sampleHandler,
};

module.exports = routes;
