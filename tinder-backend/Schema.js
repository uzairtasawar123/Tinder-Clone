const mongoose = require('mongoose')
//const {Schema} = mongoose;
const Tinder_Schema = new mongoose.Schema({
    Name:String,
    url:String
})
let data = new mongoose.model("Data" , Tinder_Schema)
module.exports = data;