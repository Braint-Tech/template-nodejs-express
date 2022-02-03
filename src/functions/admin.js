require('dotenv').config();
const { ADMIN_PASSWORD } = process.env;
const bcrypt = require('bcrypt');
const knex = require("../database/connection");

const admin = async () => {
    bcrypt.hash(ADMIN_PASSWORD, 10, async(errorBcrypt, hash) => {
        if (errorBcrypt) {
            console.log('Encryption error ' + errorBcrypt);
            return;
        }

        try{
            await knex.insert({
                name_User: "", 
                email_User: "", 
                password_User: hash,
                role_User: 1
            }).table("User");

            console.log("Admin created sucessfully!");
            return;
        }catch(error){
            console.log(error);
            return;
        }
    });
};

module.exports = {admin};