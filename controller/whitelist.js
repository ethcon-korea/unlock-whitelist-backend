const { v4: uuidv4 } = require('uuid');
const users = require('../models').users;

async function readWhitelist() {
    const allUsers = await users.findAll()
        .then((users) => {
            console.log(users)
        });

    return allUsers;
}

async function addWhitelist(name, address) {
    userId = uuidv4();

    const newUser = await users.create({
        id: userId,
        name,
        address
    })
        .then(() => {
            console.log("User created");
        })
        .catch(error => console.error(error));

    return newUser;
}

async function setWhitelist(id, name, address) {
    const user = users.update({ name, address }, {
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
    const user = await users.destory({
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