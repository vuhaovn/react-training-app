import { FaBeer } from 'react-icons/fa';

const Task = ({task, deleteTask, toggleTask}) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder': ''}`}
      onDoubleClick={() => toggleTask(task.id)}
    >
      <h3>{task.text} <FaBeer 
        onClick={() => deleteTask(task.id)}
      /></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
