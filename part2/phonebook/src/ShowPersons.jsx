import { erase } from "./services/backend";

const ShowPersons = ({ persons, filter, refreshPersons }) => { 

    const handleErase = (id, name) => {
        if (window.confirm(`Are you sure you want to delete ${name}?`)) {
            erase(id)
                .then(() => {
                    refreshPersons()
                })
                .catch((error) => {
                    console.error(`Error deleting ${name}:`, error)
                })
        }
    }

    if (filter === '') {
        return (
            <ul>
                {persons.map(person => (
                    <div key={person.name}>
                        <li>{person.name} {person.phone} <button onClick={() => handleErase(person.id, person.name)}>erase</button></li>    
                    </div>
                ))}
            </ul>
        );
    }   
    const filteredPersons = persons.filter(person => 
        person.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
        <ul>
            {filteredPersons.map(person => (
                <div key={person.name}>
                    <li>{person.name} {person.phone} <button onClick={() => handleErase(person.id, person.name)}>erase</button></li>
                </div>
            ))}
        </ul>
    );
};

export default ShowPersons;