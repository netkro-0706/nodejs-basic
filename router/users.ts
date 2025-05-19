import express, { Request, RequestHandler, Response } from "express"
import User from "../model/User"

const router = express.Router()

const getUserById: RequestHandler = (req, res): void => {
  const userId = req.params.userId
  const foundUser = User.find((item) => item.userId === userId)
  if (foundUser) {
    res.json(foundUser)
  } else {
    res.status(404).send("User not found")
  }
}

router.get("/:userId", getUserById)

export default router
