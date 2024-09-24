const user = require('./model')

const getUsers = (req, res, next) => {
    user.find()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ message: error })
        })
}

const addUser = (req, res, next) => {
    const user = new User({
        id: req.body.id,
        name: req.body.name
    });
    user.save()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        })
}

const updateUser=(req,res,next)=>{
    const{name,id}=req.body;
    user.updateOne({id:id},{$set:{name:name}})
    .then(response => {
        res.json({ response })
    })
    .catch(error => {
        res.json({ error })
    })
}

const deleteUser=(req,res,next)=>{
    const id=req.body.id;
    user.deleteOne({id:id})
    .then(response => {
        res.json({ response })
    })
    .catch(error => {
        res.json({ error })
    })
}

module.export={getUsers,addUser,deleteUser,updateUser}


// const getUsers=(cb)=>{
//     cb(users);
// }

// const getUserByid=(id,cb)=>{
//     const user=users.find((user)=>id==user.id);
//     cb(user);
// }
