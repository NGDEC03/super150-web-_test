import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Note from './noteModel.js'
import connectDB from './db.js'
const app=express()

app.use(cors())
app.use(express.json())
await connectDB()

app.post("/saveNote", async (req,res)=>{
    const data= req.body
    console.log(data);
    
    const createdNote=await Note.create({
        content:data.content,
        date:data.date
    })
    return res.json({data:createdNote})
})
app.listen(5000,()=>{
    console.log("server is listening");
    
})