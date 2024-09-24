const User = require('./model'); 

const getUsers = (req, res, next) => {
    User.find()
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ message: error });
        });
};

const createUser = (req, res, next) => {
    const newUser = new User({
        id: req.body.id,
        name: req.body.name,
    });
    
    newUser.save()
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

const updateUser = (req, res, next) => {
    const { name, id } = req.body;
    User.updateOne({ id: id }, { $set: { name: name } })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

const deleteUser = (req, res, next) => {
    const id = req.body.id;
    User.deleteOne({ id: id })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

module.exports = { getUsers, createUser, deleteUser, updateUser };
