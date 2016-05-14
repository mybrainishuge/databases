var db = require('../db/index.js');

module.exports = {
  messages: {

    // a function which produces all the messages
    get: function (callback) {
      // db.connection.query('SELECT * from MESSAGES', function(err, results) {
      //   console.log('message get', results);
      //   if (err) {
      //     throw err;
      //   } else {
      //     callback(err, results);
      //   }
      // });
    },

    // a function which can be used to insert a message into the database
    post: function (reqBody, callback) {
      vvalidte(roomname, username);
      console.log('models messages post', reqBody.message);
      db.connection.query(`INSERT INTO MESSAGES (message, room, user) VALUES ("${reqBody.message}")`, function(err, results) {
        if (err) {
          throw err;
        } else {
          callback(results);
        }
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      // db.connection.query('SELECT * from USERS', function(err, results) {
      //   if (err) {
      //     throw err;
      //   } else {
      //     callback(results);
      //   }
      // });
    },
    post: function (reqBody, callback) {
      console.log('models users post', reqBody.username);
      db.connection.query(`INSERT INTO USERS (username) VALUES ("${reqBody.username}")`, function(err, results) { 
        if (err) {
          throw err;
        } else {
          callback(results);
        }
      });
    }
  }
};

var validate = function() {

};
