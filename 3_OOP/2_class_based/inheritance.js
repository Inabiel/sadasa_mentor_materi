//Contoh Inheritance

class User {
    constructor(email, password) {
        this.__email = email;
        this.__password = password
    }

    get UserCredential() {
        return [this.__email, this.__password]
    }
}

class Admin extends User {
    constructor(email, password) {
        super(email, password);
        this.__isAdmin = true
    }

    get UserCredential() {
        return [super.UserCredential, this.__isAdmin]
    }
}

let newAdmin = new Admin("a", "a")
console.log(newAdmin)

