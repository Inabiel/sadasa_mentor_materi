//Object
//formatnya adalah key:value
//untuk mengakses, pakai dot notation/square bracket
//contoh dibawah.

let obj = {
    fname: "Jane",
    lname: "Doe",
    fullname: function () {
        return `${this.fname} ${this.lname}`
    }
}

console.log(obj.fname) // menggunakan dot notation
console.log(obj["lname"]) //menggunakan square bracket

//untuk menambah property, tinggal menulis menggunakan key yang diinginkan
//contoh : 
obj.addedProperty = "13421" //menambah property
console.log(obj)

//untuk menghapus, menggunakan keyword delete disambung dengan property yang ingin dihapus
delete obj.addedProperty //proses penghapusan
console.log(obj) //sudah terhapus