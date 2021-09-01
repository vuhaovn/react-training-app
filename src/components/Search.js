import { useState } from "react"

const Search = ({onSearch}) => {
  const [text, setText] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    onSearch(text)
    resetInputField()
  }
  const onChange = (e) => {
    setText(e.target.value)
  }
  const resetInputField = () => {
    setText('')
  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <h2>Search</h2>
        <input type='text' onChange={onChange} value={text} placeholder='Task name' />
        <input type='submit' value='Search' className='btn' style={{backgroundColor:'royalblue'}} />
      </div>
    </form>
  )
}

export default Search
