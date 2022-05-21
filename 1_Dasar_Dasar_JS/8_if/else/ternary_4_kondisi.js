let name = ""

name.length > 3 ? console.log("name lebih dari 3 karakter")
    : ((name.length >= 2 && name.length < 3) ?
        console.log("nama antara 1 dan 3 karakter")
        : console.log("nama hanya 1 karakter"))