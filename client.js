const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  //Updating the connect function to handle incoming data and console.log it for the player.
  conn.on('data', (data) => {
    console.log('Message to player: ', data)
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();



module.exports = {connect};