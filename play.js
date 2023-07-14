/*const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

console.log("Connecting ...");
connect();
*/

const connect = require("./client");

// setup interface to handle user input from stdin
const setupInput = function () {
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
    }
    // Handle other input as needed
  });
};

const stdin = setupInput(); // Call setupInput and store the stdin stream reference
handleUserInput(); // Call handleUserInput to register the callback handler