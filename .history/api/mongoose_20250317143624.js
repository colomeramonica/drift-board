import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: String,
  description: String,
  status: Enum,
  priority: Enum,
  duo_date: Date,
  assignee: String,
});

const userSchema = new Schema({
  
})
