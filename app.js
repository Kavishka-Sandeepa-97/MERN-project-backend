const express=require('express');
const app=express();
const cors=require('cors'); //cros origin resource sharing

app.use(cors());
app.use(express.urlencoded({
    extended:true
})
);
app.use(express.json()); //all data transfer in jason

module.exports=app;