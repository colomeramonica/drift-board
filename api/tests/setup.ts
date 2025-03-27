import mongoose from 'mongoose';

beforeEach(async () => {
  const db = mongoose.connection.db;
  await db.dropDatabase(); // Limpa o banco de dados antes de cada teste
});

afterAll(async () => {
  await mongoose.connection.close(); // Fecha a conexão após os testes
});
