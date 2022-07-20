import mongoose from 'mongoose'
import dotenv from 'dotenv'
// const MongoClient = require('mongodb').MongoClient;
import {MongoClient} from 'mongodb';
dotenv.config()

async function connectDB(){
    
    const url = 'mongodb+srv://react:123@react.vxslpzw.mongodb.net/?retryWrites=true&w=majority'
    // const url = 'mongodb://localhost:27017/shop'
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex:true
        })
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;