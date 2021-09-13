const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: String,
  name: String,
  userName: String,
  password: String,
}, {_id: false})

UserSchema.pre('save', async function (next){
  // if (!this.isModified("password")) {
  //   return next();
  // }
  var salt = await bcrypt.genSaltSync(10);
  var hash = await bcrypt.hashSync(this.password, salt);
  this.password = hash;
  next();
})

// UserSchema.method('transform', function () {
//   var obj = this.toObject();

//   //Rename fields
//   obj.id = obj._id;
//   return obj;
// });

UserSchema.methods.compare = async function(password){
  return bcrypt.compare(password, this.password);
}

// UserSchema.method.compare =  function (candidatePassword, cb){
//   return cb(null, bcrypt.compare(candidatePassword, this.password));
// }

let User = mongoose.model('User', UserSchema);

module.exports = User;