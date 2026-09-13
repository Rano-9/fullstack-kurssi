const mongoose = require('mongoose')

const generateId = () => {
  const generatedId = Math.floor(Math.random() * 100000)
  return String(generatedId)
}

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.8ek7fht.mongodb.net/puhelinluettelo?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)
mongoose.connect(url, { family: 4 })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  id : String,
})

const Person = mongoose.model("Person", personSchema)

if (process.argv.length < 4) {
    Person.find({}).then(result => {
        console.log("phonebook:")
        result.forEach(person => {
            console.log(person.name,person.number)
        })
        mongoose.connection.close()
        })
}
else {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4],
        id : generateId()
        })    
    person.save().then(result => {
    console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook!`)
    mongoose.connection.close()
    })
}

