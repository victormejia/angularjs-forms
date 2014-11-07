var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name : String,
  username: { type: String, unique: true },
  password : String,
  email : String
});

mongoose.model('User', userSchema);

module.exports = userSchema;
