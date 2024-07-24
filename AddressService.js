
let read = require('readline-sync');
let userSchema = require('./UserSchema');

let users = [];

function createUser() {
    try {
        let user = {...userSchema};
        user.name = read.question('Enter your name: ');
        user.age = read.question('Enter your age: ');
        user.address = {
            street: read.question('Enter your street: '),
            city: read.question('Enter your city: '),
            state: read.question('Enter your state: '),
            zipCode: read.question('Enter your zip code: ')
        };
        user.phoneNumber = read.question('Enter your phone number: ');
        user.email = read.question('Enter your email: ');

        users.push(user);

        console.log(user);
    } catch (error) {
        console.error('Error: ', error);
    }
}


function retriveUser(phoneNumber) {
    try {
        for (let user of users) {
            if (user.phoneNumber === phoneNumber) {
                console.log(user);
                return user;
            }
        }
    } catch (error) {
        console.error('Error: ', error);
    }
}

function updateUser(name, age, street, city, zipCode, phoneNumber, email, state) {
    try {
        for (let user of users) {
            if (user.name === name) {
                user.age = age;
                user.address.street = street;
                user.address.city = city;
                user.address.zipCode = zipCode;
                user.address.state = state;
                user.phoneNumber = phoneNumber;
                user.email = email;
                user.state = state;
            }
        }
    } catch (error) {
        console.error('Error: ', error);
    }
}

function deleteUser(name) {
    try {
        for (let i = 0; i < users.length; i++) {
            if (users[i].name === name) {
                users.splice(i, 1);
                console.log('User deleted successfully');
            }
        }
    } catch (error) {
        console.error('Error: ', error);
    }
}

module.exports = {
    createUser,
    retriveUser,
    updateUser,
    deleteUser
};