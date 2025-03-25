import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './Personform'
import ShowPersons from './ShowPersons'
import { getAll } from './services/backend'


const App = () => {
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState('')

  const [newPhone, setNewPhone] = useState('')

  const [filter, setFilter] = useState('')

  // Fetch data from the server
  useEffect(() => {
    getAll()
      .then((data) => {
        console.log('Fetched data:', data.data); // Check if data is an array
        setPersons(data.data)
      })
  }, [])


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm 
      newName={newName}
      handleNameChange={handleNameChange}
      newPhone={newPhone}
      handlePhoneChange={handlePhoneChange}
      persons={persons}
      setPersons={setPersons}
      />

      <h3>Numbers</h3>

      <ShowPersons persons={persons} filter={filter} />
    </div>
  )
}

export default App