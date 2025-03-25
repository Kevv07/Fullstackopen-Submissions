import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

export const getAll = () => {
  return axios.get(baseUrl)
}

export const create = ({newPerson, newPhone}) => {
   // Fetch all existing persons
  return axios.get(baseUrl).then((response) => {
    const persons = response.data;

    // Find the highest id and increment it
    const maxId = persons.length > 0 ? Math.max(...persons.map((p) => p.id)) : 0;
    const newId = maxId + 1;

    // Post the new person with the calculated id
    return axios
      .post(baseUrl, { id: newId, name: newPerson, phone: newPhone })
      .then((response) => {
        // console.log('Created new person:', response.data);
        return response.data;
    });
});
};
