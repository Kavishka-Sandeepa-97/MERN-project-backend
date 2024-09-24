

const {getUsers,createUser,updateUser,deleteUser}=require('./controller')
const app=requier('./app')

app.use(express.urlencoded({
    extended:true
})
);


app.get('/users',(req,res)=>{
    getUsers((req,res,next)=>{
        res.send();
    })
});

app.post('/createUser',(req,res)=>{
    createUser(req.body,(callback)=>{
        res.send();
    })
});

app.put('/updateUser',(req,res)=>{
    updateUser(req.body,(callback)=>{
        res.send(callback );
    })
});

app.delete('/deleteUser',(req,res)=>{
    deleteUser(req.body,(callback)=>{
        res.send(callback );
    })
});