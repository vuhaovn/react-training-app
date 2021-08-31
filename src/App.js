import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Search from './components/Search'
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    const getTasks = async () => {
      const tasksApi = await fetchTask()
      setTasks(tasksApi)
    }
    getTasks()
  }, [])

  const fetchTask = async () => {
    const res = await fetch('http://localhost:4001/tasks')
    const data = await res.json()
    return data
  }

  const fetchTaskById = async (id) => {
    const res = await fetch(`http://localhost:4001/tasks/${id}`)
    const data = await res.json()
    return data
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:4001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:4001/tasks/${id}`,
    {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = async (id) => {
    const taskFetch = await fetchTaskById(id)
    const updateTask = {...taskFetch, reminder: !taskFetch.reminder}
    const res = await fetch(`http://localhost:4001/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })
    const data = await res.json()
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder} : task ))
  }

  const onSearch = async (text) => {
    const res = await fetch(`http://localhost:4001/tasks?text_like=${text}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()
    setTasks([...tasks, data])
  }

  const onShow = () => {
    setShow(!show)
  }

  return (
    <Router>
      <div className='container'>
        <Header onShow={onShow} show={show} />
        <Route path='/about' component={About} />
        <Route path='/' exact render={(props) => (
          <>
            {show && <AddTask onAdd={addTask} />}
            <Search onSearch={onSearch}/>
            {tasks.length > 0 ?
            <Tasks 
            tasks={tasks} 
            onDelete={deleteTask}
            onToggle={toggleTask}
            /> : <p>No task to show</p>}
          </>
        )} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
