const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce',{ useUnifiedTopology: true ,useNewUrlParser: true },(err)=>{
    if(err) throw err;
    console.log('data base connected');
});