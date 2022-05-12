//Berhati-hatilah
//Jika kita lengah melakukan operasi 2 tipe data yang berbeda, akan terjadi hasil yang membagongkan :D
//Contoh dibawah

console.log(2 + 2) //Normal, Hasil 4
console.log("22" + 2)//Abnormal, karena nilai 2 di belakang diubah menjadi oleh string oleh JS.
console.log(2 - 2)//normal, hasil 0
console.log("22" - 2)//????????????, kok jadi 20? XD
console.log(023 - 014)//KOK HASILNYA JADI 7? xD

//Penjelasan

//String 22-2 hasilnya 20, itu karena operator pengurangan (-) hanya ada di tipe data number,
//maka string 22 tersebut hasilnya menjadi 20.

//023-014 kenapa menjadi 7? karena jika ada angka 0 didepan nilai, maka akan secara otomatis
//diubah menjadi oktal di JS. maka hasil dari 023(19) - 014(12) hasilnya adalah 7.

//Oleh karena itu, diperlukan type conversion
//Agar hasilnya menjadi apa yang diinginkan.
//Contoh : 
console.log(parseInt('023') - parseInt('014')) //aman!