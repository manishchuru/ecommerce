const mongoose = require('mongoose');
const schema = mongoose.Schema({
    email:String,
    password:Number,
    fname:String,
    lname:String,
    age:Number,
    text:String,

});
const Docu = mongoose.model('Docu',schema);
module.exports = Docu;