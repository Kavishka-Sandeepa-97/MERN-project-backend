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

const updae 












// const getUsers=(cb)=>{
//     cb(users);
// }

// const getUserByid=(id,cb)=>{
//     const user=users.find((user)=>id==user.id);
//     cb(user);
// }

module.exports = { getUsers, getUserByid };