const ShowPersons = ({ persons, filter }) => { 
    if (filter === '') {
        return (
            <ul>
                {persons.map(person => <li key={person.name}>{person.name} {person.phone}</li>)}
            </ul>
            )
        }   
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    return (
        <ul>
            {filteredPersons.map(person => <li key={person.name}>{person.name} {person.phone}</li>)}
        </ul>
    )
}
export default ShowPersons