import mongoose, { Schema } from 'mongoose';

export const TeamMemberSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  avatar: String,
  createdAt: Date,
  updatedAt: Date,
});

export const TeamMember = mongoose.model('TeamMember', TeamMemberSchema);
