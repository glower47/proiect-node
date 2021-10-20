const nume = "gogu"
const message = `Hello ${nume}`

console.log(message)

//////////////////

const todos = [
    'da',
    'nu'
]

const newTodos = [
    ...todos,
    'inca ceva'
]
console.log(newTodos)

//////////

const {name, culoare} = {
    name: "Dasdas",
    culoare: "das",
    mancarePreferata: 'boabe'
}

console.log(`${name}  😂  ${culoare}`)

