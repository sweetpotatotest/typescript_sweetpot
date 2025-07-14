import express, { Request, Response, Router } from "express";

import { User } from "../types/user";

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const users: string[] = [`aliec`, 'bob', 'charlie']
  res.json({ users });
})

router.post('/', (req: Request, res: Response) => {
  const { name } = req.body as { name: string };
  const newUser: User = {
    id: 1,
    name: "nn",
    email: "sss@@SSSS"
  }

  if (!name) {
    return res.status(400).json({ message: 'Name is required' })
  }
  res.status(201).json({ message: `user ${name}` })
})

export default router;