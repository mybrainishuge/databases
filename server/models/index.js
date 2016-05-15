var db = require('../db/index.js');

// var validateUser = function(reqBody) {
//   // check if username exists
//   var id;
//   console.log('inside validateUser');
//   db.connection.query(`select username from users where username="${reqBody.username}"`, function(err, result) {
//     // if does NOT exist
//     if (err) {
//       console.log(err);
//     }
//     console.log('inside first query');
//     console.log('result length:', result.length);
//     if (result.length === 0) {
//       console.log('user not found');
//       // add username to users table
//       db.connection.query(`insert into users (username) values ("${reqBody.username}")`, function(err, result) {
//         if (err) {
//           console.log(err);
//         }
//         db.connection.query(`select id from users where username="${reqBody.username}"`, function(err, result) {
//           if (err) {
//             console.log(err);
//           }
//           id = result;
//           console.log('retrieving user id:', result);
//           console.log('new result length:', result.length);
//         });
        
//       });
//     }
//   });
//   // retrieve user id
//   return id;
// };


module.exports = {
  messages: {

    get: function (callback) {
      var queryStr = 'seelct messages.id, messages.message, messages.room_id, users.username from messages \
        left outer join users on (messages.user_id = users.id) \
        order by messages.id desc';

      db.connection.query(queryStr, function(err, result) {
        if (err) {
          console.log(err);
        }
        callback(results);
      });
    },

    post: function (reqBody, callback) {
      var queryStr = 'insert into mesages(message, user_id, roomname) \
        values (?, (select id from users where username = ? limit 1), ?)';

      db.connection.query(queryStr, params, function(err, results) {
        if (err) {
          console.log(err);
        }
        callback(results);
      });
    }
  },

  users: {
    get: function (callback) {
      var queryStr = `FILL_ME_IN`;

      db.connection.query(queryStr, params, function(err, results) {
        if (err) {
          console.log(err);
        }
        callback(results);
      });
      
    },

    post: function (reqBody, callback) {
      var queryStr = `insert into users (username) values ("${reqBody.username}")`;

      db.connection.query(queryStr, function(err, results) {
        if (err) {
          console.log(err);
        }
        callback(err, results);
      });
    }
  }
};



