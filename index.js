import express from 'express'
import itemsRouter from './routes/itemsRouter.js';
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())

const port = process.env.port

mongoose.connect(process.env.mongourl)
.then(() => console.log("connected to mongodb")).then(() => {
  app.listen(port, () => {
    console.log("server running")
});

})


app.use("/items",itemsRouter)

app.use((req, res, next) => {
  res.status(404).json({ error: " not found" });
});


