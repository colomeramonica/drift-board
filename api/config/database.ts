import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI is not defined in the environment variables');
}

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

export default db;
