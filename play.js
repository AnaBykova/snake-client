
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const connection = connect(); // Store the connection object returned by connect()

setupInput(connection); // Pass the connection object to setupInput()

module.exports = { connect };
