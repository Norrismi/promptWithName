let firstName = prompt("Please enter your first name");
let lastName = prompt('Please enter your last name')

let caps = `${firstName.toUpperCase()} ${lastName.toUpperCase()} `

console.log(caps)

let number = caps.replace(/\s/g, "").length

console.log(number)

alert(`The string ${caps} is ${number} characters long.`)