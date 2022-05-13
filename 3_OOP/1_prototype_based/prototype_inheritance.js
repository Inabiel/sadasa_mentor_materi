//Contoh Prototype Inheritance
//Prototype Based
//Disini kita membuat sebuah function constructor
function User(email, password) {
    this.__email = email;
    this.__password = password
}

//membuat 2 method dibawah
User.prototype.login = function (email, password) {
    if (this.__email == email && this.__password == password) {
        return "Succesfully Login!"
    } else {
        return "Login Failed."
    }

}

User.prototype.setPassword = function (password) {
    this.__password = password
}

function Admin(email, password) {
    User.call(this, email, password)
    this.__isAdmin = true;
}
Admin.prototype = Object.create(User.prototype) // Prototype Inheritance

let anAdmin = new Admin("admin@admin.com", "password")
console.log(anAdmin.__proto__)

