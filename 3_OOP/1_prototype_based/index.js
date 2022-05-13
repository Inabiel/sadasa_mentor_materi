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
console.log(User.prototype) // mengakses protype ketika belum diinstance

//pembuatan object
let userNabil = new User("test@test.com", "password")
console.log(userNabil.__proto__) // mengakses protype ketika sudah diinstance
console.log(userNabil.login("test@test.com", "password"))
userNabil.setPassword("1234")
console.log(userNabil.login("test@test.com", "password"))
console.log(userNabil.login("test@test.com", "1234"))

