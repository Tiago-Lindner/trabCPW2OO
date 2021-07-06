class User {
    // Atributos privados (#)
    #id;
    #name;
    #messages;
    #channels;

    // Construtor
    constructor(id, name, messages, channels) {
        this.#id = id;
        this.#name = name;
        this.#messages = [];
        this.#channels = [];
    }

    // Get and Set
    getId() {
        return this.#id;
    }

    setId(id) {
        this.#id = id;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }

    getMessages() {
        return this.#messages;
    }

    setMessage(message) {
        this.#messages.push(message);
    }
    
        getChannels() {
        return this.#channels;
    }

    setChannel(channel) {
        this.#channels.push(channel);
    }

}