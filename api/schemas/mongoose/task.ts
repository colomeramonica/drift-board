import mongoose, { Schema, Types } from 'mongoose';

export const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: { type: Date, required: true },
  completedAt: Date,
  priority: { type: Number, enum: [1, 2, 3], default: 1 },
  status: {
    type: String,
    enum: ['Open', 'Ready to Dev', 'In Progress', 'Completed'],
    default: 'Open',
    index: true,
  },
  tags: { type: [String], index: true },
  responsible: { type: Types.ObjectId, ref: 'TeamMember' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Task = mongoose.model('Task', TaskSchema);
