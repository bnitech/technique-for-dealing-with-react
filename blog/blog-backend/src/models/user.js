import mongoose, { Schema } from 'mongoose';
import bcrpt from 'bcrypt';

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrpt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrpt.compare(password, this.hashedPassword);
  return result;
};

const User = mongoose.model('User', UserSchema);
export default User;
