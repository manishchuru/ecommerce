const express = require('express');
const Docu = require('./schema');
const cors = require('cors');
const app = express();
const multer = require('multer');
require('./mongoose');
app.use(express.json());
app.use(cors());
const storage = multer.diskStorage({
    destination : function(req,file,cd){
        cd(null,'uploads/')
    }
})

app.get('/about',async(req,res)=>{
    const data = await Docu.find();
    res.send(data);
    console.log(data);
});
app.post('/about',async(req,res)=>{
    const data = new Docu(req.body);
    const detail = await data.save();
    res.send(detail);
    console.log(detail)
});
app.put('/about/:id',async(req,res)=>{
    const id = req.params.id;
    const data = await Docu.findByIdAndUpdate( id ,req.body);
    const detail = await data.save();
    res.send(detail);
    console.log(detail)
});
app.delete('/about/:id',async(req,res)=>{
    const id = req.params.id;
    const data = await Docu.findByIdAndDelete( id );
    res.send(data);
    console.log(data)
});

app.listen(3500,console.log('hello from churu side'));