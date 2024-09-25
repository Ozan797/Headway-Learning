import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './src/entity/User';
import { MeditationSession } from './src/entity/MeditationSession';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'db',
  port: 5432,
  username: process.env.DB_USERNAME || 'admin',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_NAME || 'headway_learning',
  synchronize: true,
  logging: true,
  entities: [User, MeditationSession],
  migrations: ['src/migration/**/*.ts'],
  subscribers: [],
});
