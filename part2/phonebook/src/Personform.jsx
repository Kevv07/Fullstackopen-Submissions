import { create, update } from './services/backend';

const PersonsForm = ({ newName, handleNameChange, newPhone, handlePhoneChange, persons, setPersons, refreshPersons }) => {
    
    const addName = (event) => {
        event.preventDefault()

        // Check if the person already exists
        const existingPerson = persons.find(person => person.name === newName)

        if (existingPerson) {
            if (window.confirm(`${newName} is already in the phonebook, replace the old number with a new one?`)) {
                const updatedPerson = { ...existingPerson, phone: newPhone }
                update(existingPerson.id, updatedPerson)
                    .then(() => {
                      refreshPersons()
                    })
                    .catch((error) => {
                        console.error('Error updating person:', error)
                    })
            }
            return
        }

        // if the person doesnt exist
        create({ newPerson: newName, newPhone: newPhone })
          .then(() => {
          refreshPersons()
        })
          .catch((error) => {
            console.error('Error creating person:', error);
          });
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