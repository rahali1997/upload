import express from "express"


const app=express()

app.get('/',(req,res)=>{
    res.send('Api is Running...')
})




app.listen(5000,()=>console.log('server is running'))
