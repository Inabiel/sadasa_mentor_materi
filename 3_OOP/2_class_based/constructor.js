//Contoh Constructor

class User {
    constructor(email, password) {
        this.__email = email;
        this.__password = password
    }
}

let firstUser = new User("user@user.com", "user")
console.log(firstUser)