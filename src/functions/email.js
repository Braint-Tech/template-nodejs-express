const nodemailer = require('nodemailer');
require('dotenv').config();
const { MAIL, MAIL_PASSWORD } = process.env;
const smtpTransport = require('nodemailer-smtp-transport');

const transporter = nodemailer.createTransport(smtpTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    secure: false,
    auth: {
        user: MAIL,
        pass: MAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
}));

module.exports = {
    emailPasswordReset(url, emailUser){
        let mailOptions = {
            from: '',
            to: emailUser,
            subject: 'Redefinição de Senha',
            html: `<h4>Redefinição de Senha</h4>
                  <br><span>Aqui está o link para a sua redefinição de senha:  
                  ${url}</span><br>
                  <p>Atenciosamente</p><p>Equipe ()!</p>`
            };
        

        transporter.sendMail(mailOptions, (error, info) =>{
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    },

    emailVerify(url, emailUser){
        let mailOptions = {
            from: '',
            to: emailUser,
            subject: 'Verificação de Email',
            html: `<h4>Verificação de Email</h4>
                  <br><span>Aqui está o link para verificar seu email:  
                  ${url}</span><br>
                  <p>Atenciosamente</p><p>Equipe ()!</p>`
            };
        

        transporter.sendMail(mailOptions, (error, info) =>{
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
};