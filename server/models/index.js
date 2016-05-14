var db = require('../db/index.js');

module.exports = {
  messages: {

    // a function which produces all the messages
    get: function (callback) {
      db.connection.query('SELECT * from MESSAGES', function(err, results) {
        console.log('message get', results);
        if (err) {
          throw err;
        } else {
          callback(err, results);
        }
      });
    },

    // a function which can be used to insert a message into the database
    post: function (reqContent, callback) {
      console.log('messages post', reqContent);
      db.connection.query(`INSERT INTO MESSAGES (message) VALUES ("${reqContent.message}")`, function(err, results) {
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
      db.connection.query('SELECT * from USERS', function(err, results) {
        if (err) {
          throw err;
        } else {
          callback(results);
        }
      });
    },
    post: function (body, callback) {
      console.log('users post', body);
      db.connection.query(`INSERT INTO USERS (username) VALUES ("${body.username}")`, function(err, results) { 
        if (err) {
          throw err;
        } else {
          callback(results);
        }
      });
    }
  }
};

