import dotenv from "dotenv";
import express, {Application, Request, Response } from "express";

dotenv.config();  // Load environment variables

const app:Application = express();
const PORT = process.env.PORT ;

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Headway Learning API")
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port http://localhost:${PORT}`)
})