const express=require('express');
const app=express();
const cors=require('cors'); //cros origin resource sharing

const {getUsers,getUserByid}=require('./controller')

app.use(cors());
app.use(express.urlencoded({
    extended:true
})
);
app.use(express.json()); //all data transfer in jason

module.exports=app;

app.get('/users',(req,res)=>{
    getUsers(users=>{
        res.send(users);
    })
});

app.get('/user',(req,res)=>{
    getUserByid(req.query.id,user=>{
        res.send(user);
    })
});