import { knex, setupDBConnection } from './db';

const initializeDatabase = async () => {
  await setupDBConnection();

  await knex.raw(`
    CREATE TABLE IF NOT EXISTS customer (
      customer_id INT PRIMARY KEY DEFAULT unique_rowid(),
      username VARCHAR(255),
      email VARCHAR(255),
      phone_no INTEGER,
      created_at TIMESTAMP
    );
  `);

  await knex.raw(`
    CREATE TABLE IF NOT EXISTS seller (
      seller_id INT PRIMARY KEY DEFAULT unique_rowid(),
      username VARCHAR(255),
      email VARCHAR(255),
      phone_no INTEGER,
      created_at TIMESTAMP
    );
  `);

  await knex.raw(`
    CREATE TABLE IF NOT EXISTS product (
      product_id INT PRIMARY KEY DEFAULT unique_rowid(),
      product_name VARCHAR(255),
      description TEXT,
      quantity INTEGER,
      photo_url TEXT,
      tags STRING[],
      created_at TIMESTAMP
    );
  `);
};

initializeDatabase()
  .then(() => {
    console.log('Tables created successfully');
  })
  .catch((e) => {
    console.error('Error creating tables:', e);
  })
  .finally(() => {
    knex.destroy();
  });
