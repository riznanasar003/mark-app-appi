const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const {markmodel} = require ("./models/mark")

mongoose.connect("mongodb+srv://rizna10:rizna2003@cluster0.u7ke2.mongodb.net/markdb?retryWrites=true&w=majority&appName=Cluster0")

const app = express()
app.use(cors())
app.use(express.json())

app.post("/add",(req,res)=>{
    let input = req.body
    let mark = new markmodel(input)
    mark.save()
    res.json({"status":"success"})
})

app.post("/search",(resq,res)=>{
    res.send("Search")
})

app.post("/delete",(req,res)=>{
    res.send("Deleted")
})

app.post("/view",(req,res)=>{
    res.send("viewed")
})

app.listen(8080,()=>{
    console.log("Server Started")
})