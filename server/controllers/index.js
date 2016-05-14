var models = require('../models');
var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        console.log('this is the get', results);
        if (err) {
          throw err;
        } else {
          res.send(results);
        }
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req, function(err, results) {
        console.log('controller messages post', req);
        if (err) {
          throw err;
        } else {
          res.send(results);
        }
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},

    post: function (req, res) {
      models.users.post(req.body, function(err, results) {
        console.log('controller users post', req.body);
        if (err) {
          throw err;
        } else {
          res.send(results);
        }
      });
    }
  }
};

