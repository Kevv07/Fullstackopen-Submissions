import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

export const getAll = () => {
  return axios.get(baseUrl)
}

export const create = ({ newPerson, newPhone }) => {
  // auto assigning an id
  return axios
    .post(baseUrl, { name: newPerson, phone: newPhone })
    .then((response) => {
      console.log('Created new person:', response.data)
      return response.data 
    })
}

export const update = (id, newPerson) => {
  return axios.put(`${baseUrl}/${id}`, newPerson)
}

export const erase = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}
