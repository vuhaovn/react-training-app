import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task 
        key={index} 
        task={task} 
        deleteTask={onDelete}
        toggleTask={onToggle}
        />
      ))} 
    </>
  )
}

export default Tasks
