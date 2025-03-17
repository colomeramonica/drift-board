const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Task', taskSchema);
