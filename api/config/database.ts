import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const dbName =
  process.env.NODE_ENV === 'test' ? 'drift_board_test' : 'drift_board';
const dbUri = `mongodb://localhost:27017/${dbName}`;

mongoose.connect(dbUri);

const db = mongoose.connection;

db.on('connected', () => {
  console.log(`✅ Connected to MongoDB database: ${dbName}`);
});

db.on('error', (error) => {
  console.error('❌ MongoDB connection error:', error);
});

export default db;
