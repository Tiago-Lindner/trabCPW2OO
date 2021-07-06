class Message {

    // Atributos privados
    #id;
    #channel;

    // Construtor
    constructor(id, text) {
        this.#id = id;
				this.#channel = [];
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

    setChannel(channel) {
        this.#channel.push(channel);
    }
}
