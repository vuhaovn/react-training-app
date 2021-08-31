import { useState } from 'react'

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert('Please add task name')
      return
    }

    onAdd({text, day, reminder})
    setText('')
    setDay('')
    setReminder(false)
  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task Name</label>
        <input type='text' 
        placeholder='Task name' 
        value={text} 
        onChange={(e) => setText(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Date & Time</label>
        <input type='text' placeholder='Date & Time' 
        value={day} 
        onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className='form-control form-control-check'>
        <label>Set reminder</label>
        <input type='checkbox' value={reminder} 
        onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>
      <div className='form-control'>
        <input type='submit' value='Save task' className='btn btn-block' />
      </div>
    </form>
  )
}

export default AddTask
