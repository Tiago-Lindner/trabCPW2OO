//import {User} from "./User.js"

class Channel {
	
    // Atributos privados (#)
	#id
	#channel
	#user
  	#messages;

    // Construtor
    constructor(id, channel) {
        this.#id = id;
        this.#channel = channel;
        this.#user = [];
        this.#messages = [];
    }

    // Get and Set
    getId() {
        return this.#id;
    }

    setId(id) {
        this.#id = id;
    }

    getChannel() {
        return this.#channel;
    }

    setChannel(name) {
        this.#channel = channel;
    }

    getUser() {
        return this.#user;
    }

    setUser(user) {
        this.#user.push(user);
    }
    
    getMessages() {
        return this.#messages;
    }

    setMessage(message) {
        this.#messages.push(message);
    }
}
