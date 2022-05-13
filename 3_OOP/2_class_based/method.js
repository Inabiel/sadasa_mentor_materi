//Contoh Method

class User {
    constructor(email, password) {
        this.__email = email;
        this.__password = password
    }
    getUserCredential() {
        return [this.__email, this.__password]
    }
}

let firstUser = new User("user@user.com", "user")
console.log(firstUser.getUserCredential())