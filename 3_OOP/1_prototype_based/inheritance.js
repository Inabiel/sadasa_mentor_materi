//Prototype Based
//Disini kita membuat sebuah function constructor
function User(email, password) {
    this.__email = email;
    this.__password = password
}

//pembuatan inheritance
function Admin(email, password) {
    User.call(this, email, password)
    this.__isAdmin = true;
}

console.log(new Admin("admin@admin.com", "admin"))


