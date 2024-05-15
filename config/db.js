const { MongoClient } = require('mongodb');//mongoose se connection nahi kiya hai nahi to model or schema bante usme

const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';

let db;

async function connectDB() {
  const client = new MongoClient(url);
  await client.connect();
  db = client.db(dbName);
  console.log('Connected to MongoDB');
}

function getDB() {
  if (!db) {
    throw new Error('Database connection not established');
  }
  return db;
}

module.exports = {
  connectDB,
  getDB,
};