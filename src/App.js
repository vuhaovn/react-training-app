import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Search from './components/Search'
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    const getTasks = async () => {
      const tasksApi = await fetchTasks()
      setTasks(tasksApi)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch(`${process.env.REACT_APP_API}`, {
      method: 'GET'
    })
    const data = await res.json()
    return data
  }

  const fetchTaskById = async (id) => {
    const res = await fetch(`${process.env.REACT_APP_API}/${id}`, {
      method: 'GET'
    })
    const data = await res.json()
    return data
  }

  const addTask = async (task) => {
    const res = await fetch(`${process.env.REACT_APP_API}`, {
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
    await fetch(`${process.env.REACT_APP_API}/${id}`,
    {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = async (id) => {
    const taskFetch = await fetchTaskById(id)
    const updateTask = {...taskFetch, reminder: !taskFetch.reminder}
    const res = await fetch(`${process.env.REACT_APP_API}/${id}`, {
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
    const res = await fetch(`${process.env.REACT_APP_API}?q=${text}`, {
      method: 'GET'
    })

    const data = await res.json()
    setTasks(data)
  }

  const onShow = () => {
    setShow(!show)
  }

  return (
    <Router>
        <div className='container'>
          <nav>
            <ul>
              <li>
                <NavLink exact to='/react-training-app/' activeClassName='active'>Home</NavLink>
              </li>
              <li>
                <NavLink exact to='/react-training-app/about' activeClassName='active'>About</NavLink>
              </li>
            </ul>
          </nav>
          <Route exact path='/react-training-app/'>
            <Header onShow={onShow} show={show} />
            {show && <AddTask onAdd={addTask} />}
            <Search onSearch={onSearch}/>
            {tasks.length > 0 ?
            <Tasks 
            tasks={tasks} 
            onDelete={deleteTask}
            onToggle={toggleTask}
            /> : <p>No task to show</p>}
          </Route>
          <Route exact path='/react-training-app/about'>
            <About />
          </Route>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
