const { v4: uuidv4 } = require('uuid');
const { Users } = require('../models/users');

async function readWhitelist() {
    const users = await Users.findAll()
        .then((users) => {
            console.log(users)
        });

    return users;
}

async function addWhitelist(name, address) {
    const users = await Users.create({
        id: uuidv4(),
        name,
        address
    })
        .then(() => {
            console.log("User created");
        })

    return users;
}


async function setWhitelist(id, name, address) {
    const user = Users.update({ name, address }, {
        where: {
            id
        }
    })
        .then(() => {
            console.log("User updated");
        })

    return user;
}


async function deleteWhitelist(id) {
    const user = await Users.destory({
        where: {
            id
        }
    })
        .then(() => {
            console.log("User deleted");
        })
    return user;
}

module.exports = { readWhitelist, addWhitelist, setWhitelist, deleteWhitelist };