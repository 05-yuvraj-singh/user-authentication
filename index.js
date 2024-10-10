const express = require('express')
const cors = require('cors')

const port = process.env.PORT ||9090
const app = express()

app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).json({success:true , message:'Home route'})
})

app.get('/test',(req,res)=>{
    res.status(200).json({success:true , message:'testing route works fine'})
})
app.listen(port , ()=>{
    console.log(`SERVER RUNNING FINE ON PORT ${port}`)
})
