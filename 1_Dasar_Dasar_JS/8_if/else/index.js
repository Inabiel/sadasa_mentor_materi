//If/else if /else
//If=percabangan pertama
//else if=percabangan kedua apabila kondisi satu tidak sesuai
//else=percabangan default ketika tidak ada kondisi yang sesuai
const studentMark = 74
if (studentMark > 76) {
    console.log("Student pass!")
} else if (studentMark > 70 && studentMark < 76) {
    console.log("student goes into remedial.")
} else {
    console.log("Student repeat a year.")
}

//Contoh Switch
//Mirip dengan if/else if/else
//dilakukan untuk komparasi yang kondisinya == (Sama dengan)
//contoh: 
const myMark = "A"
switch (myMark) {
    case "A":
        console.log("I Passed with rainbow mark!")
        break;
    case "B":
        console.log("I Passed with desireable mark")
        break;
    case "C":
        console.log("I Passed. that's it.")
        break
    case "D":
        console.log("I Didn't passed. Just a little bit more")
        break
    case "E":
        console.log("I didnt passed. i didnt study.")
        break
    default:
        console.log("Forget about it.")
        break
}

//Ternary Operator
//Bentuk singkat dari if/else
//Contoh
studentMark > 75 ? console.log("I Passed!") : console.log("I didnt pass!")