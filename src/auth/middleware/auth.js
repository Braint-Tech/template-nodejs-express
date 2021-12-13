require('dotenv').config();
const { TOKEN_KEY } = process.env;
const jwt = require('jsonwebtoken');

exports.required = (req, res, next) =>{

    try{
        const token = req.headers['authorization'].split(" ")[1]; 
        const userData = jwt.verify(token, TOKEN_KEY); 
        req.user = userData; 
        next();
    }catch(error){
        res.status(401).send({ message: 'Authentication Failed!'});
    }
}