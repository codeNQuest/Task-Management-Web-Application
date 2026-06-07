const mongoose = require('mongoose');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

UserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  obj.avatarUrl = `https://www.gravatar.com/avatar/${crypto.createHash('md5').update(obj.email.trim().toLowerCase()).digest('hex')}?d=identicon`;
  return obj;
};

module.exports = mongoose.model('User', UserSchema);
