import nodeMailer from 'nodemailer';
import env from 'dotenv';

let a = env.config().parsed;

let transporter = nodeMailer.createTransport({
    host : a.SMTP_HOST,
    port : a.SMTP_PORT,
    secure: false,
    auth:{
        user : a.EMAIL,
        pass : a.SENHA
    }
})

export default function EnvioEmail(destinatario , assunto , mensagem , anexo ){
    let mailOptions = {
        from: a.EMAIL, // Remetente
        to: destinatario, // Destinatário
        subject: assunto, // Assunto
        text: mensagem, // Corpo do e-mail
        };

    if(anexo != null ){
        mailOptions.attachments= {path :'./teste.json'};
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });
}