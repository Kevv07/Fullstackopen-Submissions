const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      filter including: <input value={filter} onChange={handleFilterChange}/>
    </div>
  )
}

export default Filter