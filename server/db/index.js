var Sequelize = require('Sequelize');
var orm = new Sequelize('chat', 'root', 'pass');

var User = orm.define('User', {
  username: Sequelize.STRING
});

var Message = orm.define('Message', {
  text: Sequelize.STRING, // should this be 'message' instead of 'text'?
  roomname: Sequelize.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;

// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'pass',
//   database: 'chat'
// });

// connection.connect(function(err) {
//   if (err) {
//     console.log('not connected');
//   } else {
//     console.log('i m connected');
//   }

// });

// module.exports.connection = connection;