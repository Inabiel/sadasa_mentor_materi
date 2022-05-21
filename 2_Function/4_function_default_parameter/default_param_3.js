let greetWithMsg = (name, msg1 = "Hi", msg2 = "How", msg3 = "Are you?") => {
    return `${name}, ${msg1} ${msg2}, ${msg3}`
}

console.log(greetWithMsg("Nabil"))