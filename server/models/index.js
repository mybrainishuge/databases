var db = require('../db/index.js');

module.exports = {
  messages: {

    // a function which produces all the messages
    get: function () {
      db.connection.query('SELECT * from MESSAGES', function(err, rows, fields) {
        if (err) {
          throw err;
        }
      });
    },

    // a function which can be used to insert a message into the database
    post: function (text) {
      db.connection.query(`INSERT INTO MESSAGES message (${text})`, function(err, rows, fields) {
        if (err) {
          throw err;
        }
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {
      db.connection.query('SELECT * from USERS', function(err, rows, fields) {
        if (err) {
          throw err;
        }
      });
    },
    post: function (username, first, last, loc, age, gender) {
      db.connection.query(`INSERT INTO USERS (username, firstName, lastName, location, age, gender) VALUES (${username, first, last, loc, age, gender})`, function(err, rows, fields) {
        if (err) {
          throw err;
        }
      });
    }
  }
};

