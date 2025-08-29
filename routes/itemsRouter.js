import express from 'express'
import { createItems ,getAllItems} from '../controller/itemsController.js'
const itemsRouter = express.Router()

itemsRouter.post("/",createItems)
itemsRouter.get("/",getAllItems)


export default itemsRouter