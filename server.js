const express=require('express');
const app=express();
const cors=require('cors'); //cros origin resource sharing

const port=3001;
const host='127.0.0.1';
const mongoose=require("mongoose");

app.use(cors());
app.use(express.json()); //all data transfer in jason

const uri='mongodb+srv://kavishka:Kavi@123@cluster0.7fodv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connection=async ()=>{
    try {
        await mongoose.connect(uri);
        console.log('mongodb conected');
    } catch(er) {
        console.log('mongodb error',er);
    }
};
connection();

const server=app.listen(3001,'127.0.0.1',()=>{
    console.log(`node server listening ${server.address().port}`);
});