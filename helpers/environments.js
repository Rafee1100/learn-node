/**
 * title: Environments
 * Description: Handle all environment related things
 * Author:Abdullah Al Rafee
 */

// Dependencies

//module scaffolding
const environments = {};

environments.staging = {
  port: 3000,
  envName: "Staging",
};

environments.production = {
  port: 5000,
  envName: "Production",
};

// Determine which environment was passed
const currentEnvironment =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

//export corresponding env object

const environmentToExport =
  typeof environments[currentEnvironment] === "object"
    ? environments[currentEnvironment]
    : environments[staging];

module.exports = environmentToExport;
