const { Client } = require('pg');

const client = new Client({
    user: 'myuser',
    host: 'localhost',
    database: 'mydb',
    password: '', 
    port: 26257,
    ssl: false,
  });  

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS customers (
    id INT PRIMARY KEY,
    name STRING NOT NULL,
    phone_no INT,
    email STRING,
    created_at TIMESTAMP DEFAULT now() NOT NULL
  );
`;

async function createTable() {
  try {
    await client.connect();
    console.log('Connected to CockroachDB');

    await client.query(createTableQuery);
    console.log('Table "users" created successfully (if not exists).');
  } catch (err) {
    console.error('Error creating table:', err);
  } finally {
    await client.end();
  }
}

createTable();