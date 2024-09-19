

const {getUsers,getUserByid}=require('./controller')


app.use(express.urlencoded({
    extended:true
})
);


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