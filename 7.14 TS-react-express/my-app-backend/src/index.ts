import express, { Request, Response } from "express";
import userRouter from './routes/user.route'
import cors from 'cors';

const app = express();
const PORT: number = 4000;

app.use(express.json());
app.use(cors());
app.use('/users', userRouter)

app.get("/", (req: Request, res: Response) => {
  res.send("TSTSTSTS")
})

app.listen(PORT, () => {
  console.log(`server running ${PORT} port!`)
})