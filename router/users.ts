import express, { Request, Response } from "express"
import User from "../model/User"

const router = express.Router()

router.get("/", async (req: Request, res: Response): Promise<any> => {
  return res.json(User)
})

router.get("/:userId", async (req: Request, res: Response): Promise<any> => {
  const userId = req.params.userId
  const foundUser = User.find((item) => item.userId === userId)
  if (foundUser) {
    return res.json(foundUser)
  } else {
    return res.status(404).send("User not found")
  }
})

export default router
