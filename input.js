const { connect } = require("./play");

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

//Create a function called handleUserInput and register it as the "data" callback handler for stdin.
//It should check for the ctrl + c input and terminate the game. 
const handleUserInput = function () {
  process.stdin.on("data", (key) => {
    if (key === "\u0003") { // Check for Ctrl+C input      
      process.exit(); // Terminate the game
    } else if (key === "w") {
      connection.write("Move: up"); // Send "Move: up" to the server
    } else if (key === "a") {
      connection.write("Move: left"); // Send "Move: left" to the server
    } else if (key === "s") {
      connection.write("Move: down"); // Send "Move: down" to the server
    } else if (key === "d") {
      connection.write("Move: right"); // Send "Move: right" to the server
    } else if (key === "q") {
      connection.write("Say: Lucky");
    }
    // Handle other input as needed
  });
};

let connection;

const stdin = setupInput(); // Call setupInput and store the stdin stream reference
handleUserInput(); // Call handleUserInput to register the callback handler

module.exports = { setupInput };
