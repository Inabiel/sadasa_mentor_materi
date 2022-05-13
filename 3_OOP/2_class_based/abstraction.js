//Contoh abstraction

class User {
    #email
    #password
    constructor(email, password) {
        this.#email = email;
        this.#password = password
    }

    get UserCredential() {
        return [this.#email, this.#password]
    }
}

let firstUser = new User("a", "a")
console.log(firstUser)
console.log(firstUser.UserCredential)