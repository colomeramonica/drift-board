import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [3, 'Title must be at least 3 characters long'],
  },
  description: {
    type: String,
    maxlength: [360, 'Description cannot exceed 360 characters'],
  },
  status: {
    type: String,
    enum: ['Open', 'Ready to Dev', 'In Progress', 'Completed'],
    default: 'Open',
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Low',
  },
  due_date: {
    type: Date,
    validate: {
      validator: (value) => value >= new Date(),
      message: 'Due date cannot be in the past',
    },
  },
  assignee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Assignee is required'],
  },
  tags: {
    type: [String],
    default: [],
  },
});

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long'],
  },
});

const Task = mongoose.model('Task', taskSchema);
const User = mongoose.model('User', userSchema);

export { Task, User };
