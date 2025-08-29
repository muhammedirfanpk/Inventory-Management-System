import mongoose from "mongoose";
import itemsModel from "../models/itemsModel.js";

export const createItems = async (req,res) => {
     const {name,quantity,price} = req.body
    try {
    if (!name || !quantity || !price ){
        return res.status(400).json({error:"All fields are empty"})
    }

    const existingiItem  = await itemsModel.findOne({name})
    if(existingiItem){
        return res.status(400).json({error:"item already exists"})
    }

    const newItem =  await itemsModel.create({name,quantity,price})
    res.status(201).json({message:"items created succsessfully",newItem})

    
    } catch (error) {
        res.status(400).json({error})
    }
    }

    export const getAllItems = async(req,res) => {
        try {
            const items = await itemsModel.find({})
        res.json(items) 
        } catch (error) {
            res.status(500).json({error: error.message})
        }
       

    }