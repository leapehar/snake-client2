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

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });

  conn.on('connect', () => {
    conn.write("Name: LEA");
  });


  // moving the snake up by one spot on connect

  // conn.on('connect', () => {
  //   conn.write("Move: up");
  // });

  // moving the snake up incrementally until the stop condition is met

  // for (let delay = 0; delay < 30000; delay = delay + 500) {
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, delay)
  // }


  // setTimeout(() => {
  //   conn.write("Move: up");

  // }, 2000)

  // setTimeout(() => {
  //   conn.write("Move: up");

  // }, 3000)


  return conn;
};





module.exports = {connect};