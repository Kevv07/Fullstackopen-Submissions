import { create, update } from './services/backend';

const PersonsForm = ({ newName, handleNameChange, newPhone, handlePhoneChange, persons, setPersons, refreshPersons, setErrorMessage }) => {
    
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
                      setErrorMessage({ message: `Updated ${newName} number successfully!`, type: 'success' })
                      setTimeout(() => {
                        setErrorMessage(null)
                      }, 5000)
                    })
                    .catch(() => {
                      setErrorMessage({ message: `Error deleting ${newName}.`, type: 'error' })
                      setTimeout(() => {
                        setErrorMessage(null)
                      }, 5000)
                    })
            }
            return
        }

        // if the person doesnt exist
        create({ newPerson: newName, newPhone: newPhone })
          .then(() => {
          refreshPersons()
          setErrorMessage({ message: `Added ${newName} successfully!`, type: 'success' })
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
          .catch(() => {
            setErrorMessage({ message: `Error creating ${newName}.`, type: 'error' });
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
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