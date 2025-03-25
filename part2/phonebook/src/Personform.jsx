import { create } from './services/backend'

const PersonsForm = ({ newName, handleNameChange, newPhone, handlePhoneChange, persons, setPersons }) => {
    
    const addName = (event) => {
        event.preventDefault()
        if (persons.some(person => person.name === newName)) {
          alert(`${newName} is already added to phonebook`)
          return
        }
        setPersons(persons.concat({ name: newName, phone: newPhone}))
        create({newPerson: newName, newPhone: newPhone})
      }
  
    return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newPhone} onChange={handlePhoneChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}
export default PersonsForm