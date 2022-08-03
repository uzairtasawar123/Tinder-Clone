const express  = require('express')
const mongoose = require('mongoose')
const connectdb = require('./mongooseConnect')
const Data = require('./Schema')
const Cors = require('cors')

const port = process.env.PORT || 5000;

const app = express();
connectdb();

app.use(express.json());
app.use(Cors())


//////////  GET    //////////
app.get('/tinder/get' , async (req , res)=>{
        Data.find((err , data)=>{
            if(err){
                res.status(500).send("Error Occured")
            }
            else{
                res.status(200).send(data)
            }
        })
})

/////////   Send   ////////
app.post('/tinder/post' , async (req , res)=>{
    
    const datas = req.body;
    Data.create(datas , (err, data)=>{
        if(err){
            res.status(500).send("Error Occured")
        }
        else{
            res.status(200).send("Data is Added" + data)
        }
    })

})

app.listen(port  , ()=>{
    console.log(`Request is listening by http://localhost:${port}`)
})