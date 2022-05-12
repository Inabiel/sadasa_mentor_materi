//for..in
//digunakan untuk melakukan iterasi pada object property
//contoh for..in
let obj = {
    fname: "Jane",
    lname: "Doe",
    fullname: function () {
        return `${this.fname} ${this.lname}`
    }
}

for (let i in obj) {
    console.log(`keynya adalah${i},  dengan value ${obj[i]}`)
}