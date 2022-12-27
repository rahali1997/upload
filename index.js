import express from "express"


const app=express()

app.get('/rest1',(req,res)=>{
    res.send('First Api is Running...')
})




app.listen(5000,()=>console.log('server is running'))
