//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode
"use strict";

// Importando as duas classes
import { User } from "./src/User.js"
//import { Channel } from "./Channel.js"
//import { Message } from "./Message.js"
//import { VoiceMessage } from "./VoiceMessage.js"
import { TextMessage } from "./src/TextMessage.js";

// Instanciando os objetos
let user = new User(1, "Rodrigo");
let textMessage = new TextMessage(1, "mensagem de texto");
// associando uma mensagem ao usuário Rodrigo
user.setMessage(textMessage);

// Mostrando no console
console.log(user.getId());
console.log(user.getMessages()[0].getText());
