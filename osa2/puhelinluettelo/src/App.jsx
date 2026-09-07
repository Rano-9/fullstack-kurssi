import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons' 
import Notification from './components/Notification'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")
  const [notification, setNotification] = useState(null)
  const [errors,setErrors] = useState(null)

  useEffect( () => {
    personsService.getAll().then(loadedPersons => setPersons(loadedPersons))
  },[])
  
    
  const handleSubmit = (event) => {
    event.preventDefault()
    const foundPerson = persons.find(person => newName === person.name) 
    if (foundPerson) {
      if (window.confirm(`${newName} already exists, replace old number with new number?`)) {
        const updateTarget = {...foundPerson, number : newNumber} 
        personsService.update(updateTarget.id,updateTarget)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
          setNotification(`${returnedPerson.name}'s number was updated`)
          setTimeout(() => {
            setNotification(null)
          }, 5000);
        })
        .catch( error => {
          setErrors(`error happened. Person is deleted from database`)
          setTimeout(() => {
            setErrors(null)
          }, 5000);
        })
      }
    }
    else {
      const newPerson = { name: newName, number: newNumber }
      personsService.create(newPerson)
        .then(newPersons => {
          setPersons(persons.concat(newPersons))
          setNotification(
            `${newPerson.name} was created`
          )
          setTimeout(() => {
            setNotification(null)
          }, 5000);
        })
      
        setNewName("")
      setNewNumber("")
    }
  }

  
  const handleDelete = person => {
        if (window.confirm(`delete ${person.name}?`)) {
            personsService.del(person.id)
              .then(deletedPerson => {
                setPersons(persons.filter(person => {if (person.id !== deletedPerson.id) return person }))
                setNotification(`${deletedPerson.name} was deleted.`)
                setTimeout(() => {
                  setNotification(null)
                }, 5000);
              })
              .catch( error => {
                setErrors(`error happened. Person was already deleted`)
                setTimeout(() => {
                  setErrors(null)
                }, 5000);
              })
        }
    }

  const personsToShow = filter === "" ? persons.map(person => person)
    : persons.map(person => person.name.toLowerCase().includes(filter) ? person : null)

  return (
    <div>
      <Notification message={notification} errors ={errors}/>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={(event) => setFilter(event.target.value)} />
      <h2>Add a new</h2>
      <PersonForm onSubmit={(event) => handleSubmit(event)} newName={newName} newNumber={newNumber} onNumChange={(event) => setNewNumber(event.target.value)} onNameChange={(event) => setNewName(event.target.value)} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} onClick={handleDelete} />
    </div>
  )
}

export default App