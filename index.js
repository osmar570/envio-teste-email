import express from 'express';
import EnvioEmail from './enviaEmail.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json())

app.post('/enviar-email', (req, res) => {
    const {destinatario , assunto , mensagem , anexo  } = req.body
    // console.log(req.body.destinatario)
    EnvioEmail(destinatario , assunto , mensagem , anexo );
    res.status(200).send({ message: 'Email enviado com sucesso' });
});

app.listen(3000, () => {
    console.log('API iniciada na porta 3000');
});