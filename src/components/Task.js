import { AiOutlineBorder, AiOutlineCheckSquare, AiFillDelete } from "react-icons/ai";

const Task = ({task, deleteTask, toggleTask}) => {
  return (
    <div className='task'>
      <div className='flex'>
        <h3>{task.text}</h3>
        <div className='flex'>
          <button className='btn' style={{backgroundColor: 'gold'}} onClick={() => toggleTask(task.id)}>
            {task.reminder ? <AiOutlineCheckSquare /> : <AiOutlineBorder />}
          </button>
          <button className='btn' style={{backgroundColor: 'tomato'}} onClick={() => deleteTask(task.id)}>
            <AiFillDelete />
          </button>
        </div>
      </div>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
