var mongoose = require('mongoose');

var User = mongoose.model('User');

module.exports = {

  checkUsername : function(req, res) {
    var username = req.query.u;
    User.find({ username: username }).exec(function(err, user) {
      setTimeout(function() {
        var ok = !(user.length || err);
        res.status(ok ? 200 : 400).json({
          ok : ok
        });
      }, 500);
    });
  },

  getUsers : function(req, res) {
    User.find({}).exec(function (err, users) {
      res.send(users);
    });
  },

  create : function(req, res) {
    var data = req.body;
    var signup = new User(data);
    signup.save(function() {
      res.json(signup);
    });
  }

};
