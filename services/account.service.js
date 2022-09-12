const {User} = require('../config/db');

const refreshTokens = []
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const createUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let name = data.name;
            let password = data.password;
            let email = data.email;
            if (name && password) {
               
                let user = await User.create({
                    name,
                    password: password,
                    email: email,
                    role: "user"
                });

                resolve(user)
            }
        } catch (error) {
            reject(error)
        }
    })
    
}
module.exports = {
    createUser
}