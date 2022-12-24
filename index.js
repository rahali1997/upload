import express from "express"


const app=express()

app.get('/',(req,res)=>{
    res.send('Server is Running')
})

app.get('/api/all',(req,res)=>{
    res.status(200).json({res:"hello"})
})


app.listen(5000,()=>console.log('server is running'))