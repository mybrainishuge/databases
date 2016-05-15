var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {

      Message.findAll({ include: [User] })
        .complete(function(error, results) {
          res.json(results);
        });

      // models.messages.get(function(err, results) {
      //   if (err) {
      //     console.log(err);
      //   }
      //   res.json(results);
      // });
    },

    post: function (req, res) {
      User.findOrCreate({username: req.body.username})
        .complete(function(err, user) {
          var params = {
            message: req.body.message, 
            userid: user.id, 
            roomname: req.body.room_id
          };
        });

      Message.create(mesparams)
        .complete(function(err, results) {
          res.sendStatus(201);
        });

      // models.messages.post(req.body, function(err, results) {
      //   if (err) {
      //     console.log(err);
      //   }
      //   res.json(results);
      // });

    }
  },

  users: {
    get: function (req, res) {
      User.findAll()
        .complete(function(error, results) {
          res.json(results);
        });

      // models.users.get(function(err, results) {
      //   if (err) {
      //     console.log(err);
      //   }
      //   res.json(results);
      // });
    },

    post: function (req, res) {
      User.create({username: req.body.username})
        .complete(function(err, user) {
          res.sendStatus(201);
        });

      // var params = [req.body.username];
      // models.users.post(req.body, function(err, results) {
      //   if (err) {
      //     console.log(err);
      //   }
      //   console.log(req);
      //   res.json(results);
      // });
    }
  }
};

