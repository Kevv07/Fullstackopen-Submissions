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

  const [errorMessage, setErrorMessage] = useState(null)

  
  const Notification = ({ message, type }) => {
    if (!message) {
      return null
    }
  
    return (
      <div className={type === 'error' ? 'error' : 'success'}>
        {message}
      </div>
    )
  }

  // fetch data from the server
  const refreshPersons = () => {
    getAll()
      .then((data) => {
        setPersons(data.data)
      })
      .catch(() => {
        setErrorMessage({ message: 'Error fetching data', type: 'error' })
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  }

  // fetch when the component mounts
  useEffect(() => {
    refreshPersons()
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
      <Notification message={errorMessage?.message} type={errorMessage?.type} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm 
      newName={newName}
      handleNameChange={handleNameChange}
      newPhone={newPhone}
      handlePhoneChange={handlePhoneChange}
      persons={persons}
      setPersons={setPersons}
      refreshPersons={refreshPersons}
      setErrorMessage={setErrorMessage}
      />

      <h3>Numbers</h3>

      <ShowPersons 
      persons={persons} 
      filter={filter} 
      refreshPersons={refreshPersons} 
      setErrorMessage={setErrorMessage}
      />

    </div>
  )
}

export default App