const UserModel = require('../models/Auth');
const bcrypt = require('bcrypt');
require('dotenv').config();
const { TOKEN_KEY } = process.env;
const jwt = require('jsonwebtoken');

class User{

    async auth(req, res){
        const { email, password } = req.body;

        try{
            let resultFindByEmail = await UserModel.findUserByEmail(email);

            if(resultFindByEmail.length === 0)
                return res.status(406).json({message: "Email not found!"});

            try{
                let authenticated = await bcrypt.compare(password, resultFindByEmail[0].password_User);
                
                if(authenticated){
                    const token = jwt.sign({ // Informações necessárias para o token
                        idUser: resultFindByEmail[0].id_User,
                        role: resultFindByEmail[0].role_User
                    },
                    TOKEN_KEY,
                    {
                        expiresIn: "4h"
                    });
                
                    return res.status(200).json({ message: "user successfully authenticated!", token});
                }else
                    return res.status(403).json({ message: 'Incorrect password!'});
                
            }catch(error){
                console.log(error);
                return res.status(401).json({ message: 'Authentication Failed!', error});
            }     
        }catch(error){
            return res.status(500).json({error});
        }
    }
}

module.exports = new User();