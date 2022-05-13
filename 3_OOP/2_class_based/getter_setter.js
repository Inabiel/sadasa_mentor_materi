//Contoh getter

class User {
    constructor(email, password) {
        this.__email = email;
        this.__password = password
    }
    get UserCredential() {
        return [this.__email, this.__password]
    }
}

let firstUser = new User("user@user.com", "user")
console.log(firstUser.UserCredential)


