import 'reflect-metadata';
import express, { Application,Request,Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AppDataSource } from '../data-source';
import authRoutes from './routes/authRoutes';
import meditationRoutes from "./routes/meditationRoutes"

dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize TypeORM DataSource
AppDataSource.initialize()
  .then(() => {
    console.log('Connected to the PostgreSQL database');
    // Home Route
    app.get("/", (req: Request, res: Response) => {
        res.send("Welcome to Headway Learning API")
    })

    // Use routes
    app.use('/api/auth', authRoutes);
    app.use('/api/meditations', meditationRoutes);

    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error('Database connection error:', error));


