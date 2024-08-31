
import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId; // Указываем тип _id явно
  email: string;
  name: string;
  password?: string;
  isAdmin: boolean;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String },
  isAdmin: { type: Boolean, default: false }
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;


