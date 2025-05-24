import mongoose, { Document, Schema } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string;
  password: string;
  email: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessage: boolean;
  messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email",
    ],
  },
  verifyCode: {
    type: String,
    required: [true, "verify code is required"],
  },
   verifyCodeExpiry: {
    type: Date,
    required:[true,"VerifyExpiry code is required"]
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage:{
    type:Boolean,
    default:true
  },
  messages:[MessageSchema]
 
});

const UserModel=(mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User",UserSchema));

export default UserModel;