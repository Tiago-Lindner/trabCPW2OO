//import {User} from "./User.js"

class Channel {
	
    // Atributos privados (#)
	#id
	#hash
	#user
  #messages;

    // Construtor
    constructor(id, hash) {
        this.#id = id;
        this.#hash = hash;
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

    getHash() {
        return this.#hash;
    }

    setHash(name) {
        this.#hash = hash;
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
