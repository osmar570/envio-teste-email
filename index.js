import EnvioEmail from './enviaEmail.js';
import a from 'readline-sync';

let destinatario = a.question('para quem voce quer enviar um email? \r\n');

let assunto = a.question('qual assunto ? \r\n');

let mensagem = a.question('qual a mensagem ? \r\n');
 
let anexo = a.question('qual o anexo? \r\n');



EnvioEmail(destinatario,assunto,mensagem,anexo);

