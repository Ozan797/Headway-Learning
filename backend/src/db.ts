import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();length;

// Log all database configuration values for verification
console.log('Database connection details:');
console.log({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT || 5432,
});

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.POSTGRES_PORT),
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

export default pool;
