import express, { Request, Response } from "express"
import userRouter from "./router/users"
import cors from "cors"

const app = express()
const port = 8080

app.use(cors())

app.get("/", (req: Request, res: Response) => {
  res.send(
    `API Document: </br>
  1.GET - <a href="http://localhost:8080/users/hihihi">http://localhost:8080/users/hihihi</a>, 
  <a href="http://localhost:8080/users/bybyby">bybyby</a>, 
  <a href="http://localhost:8080/users/gogogo">gogogo</a> </br>
  2.POST - </br>
  run - npx ts-node app.ts </br>
  `
  )
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/users", userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`run to http://localhost:${port}/`)
})
