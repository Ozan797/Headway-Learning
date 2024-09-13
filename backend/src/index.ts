import express, { Request, Response } from 'express';
import createTables from './schema';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// Create tables on startup
createTables();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
