const express  = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://Tinder:tinder1234@tinder.pxswgfu.mongodb.net/?retryWrites=true&w=majority'


const connectdb  =  ()=>{
     mongoose.connect(url , {
        useNewUrlParser:true
    }, (err)=>{
        if(!err){
            console.log("Db Connected")
        }
        else{
            console.log("Error")
        }
    })
}

module.exports = connectdb;