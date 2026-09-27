const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn('DATABASE_URL is not set. Contact form submissions will fail until the database is configured.');
}

const pool = connectionString
  ? new Pool({ connectionString })
  : null;

if (pool) {
  pool.on('error', (err) => {
    console.error('Unexpected Postgres pool error', err);
  });
}

module.exports = pool;
