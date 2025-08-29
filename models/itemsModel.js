import mongoose from "mongoose";

const itemsSchema = mongoose.Schema({name:{type:String,required:true},
    quantity:{type:Number},
    price:{type:Number}})

    const itemsModel = mongoose.model("items",itemsSchema)

    export default itemsModel