import mongoose from 'mongoose';

const DB_CONNECTION_STRING = 'mongodb://127.0.0.1:27017/drift-board';

mongoose.connect(DB_CONNECTION_STRING);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

export default db;
