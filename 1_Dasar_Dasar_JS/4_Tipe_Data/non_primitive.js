let checkType = (arr) => {
    return arr.map((ele) => console.log(typeof (ele)))
}
//Hiraukan code diatas.

//Contoh tipe data non-primitive, yang mampu menyimpan berbagai nilai dalam satu variable
let arr = ["🦏", "🐪", "🦏", "🐪", "🦏", "🐪",]
let obj = {
    fname: "Jane",
    lname: "Doe",
    fullname: function () {
        return `${this.fname} ${this.lname}`
    }
}
let setOfEmoji = new Set(arr)
let mapType = new Map(Object.entries(obj))
checkType([arr, obj, setOfEmoji, mapType])
