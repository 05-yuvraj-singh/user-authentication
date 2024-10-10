const express = require('express')
const port = 9090
const app = express()

app.get('/',(req,res)=>{
    res.status(200).json({success:true , message:'Home route'})
})

app.get('/test-route',(req,res)=>{
    res.status(200).json({success:true , message:'testing route works fine'})
})
app.listen(port , ()=>{
    console.log(`SERVER RUNNING FINE ON PORT ${port}`)
})
