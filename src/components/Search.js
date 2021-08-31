const Search = ({onSearch}) => {
  return (
    <form className='add-form' onSubmit={onSearch}>
      <div className='form-control'>
        <h2>Search</h2>
        <input type='text' placeholder='Task name' />
        <input type='submit' value='Search' />
      </div>
    </form>
  )
}

export default Search
