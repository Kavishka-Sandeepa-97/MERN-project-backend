const users=[
    {   id:1,
        name:"kavishka"
    },
    {
        id:2,
        name:"namal"
    }
]

const getUsers=(cb)=>{
    cb(users);
}

const getUserByid=(id,cb)=>{
    const user=users.find((user)=>id==user.id);
    cb(user);
}

module.exports={getUsers,getUserByid};