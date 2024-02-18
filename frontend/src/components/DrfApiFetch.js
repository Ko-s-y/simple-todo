import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DrfApiFetch = () => {
  const [tasks, setTasks] = useState([])
  const [selectedTask, setSelectedTask] = useState([])
  const [editedTask, setEditedTask] = useState({id: '', title: ''})
  const [id, setId] = useState(1)

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/tasks/', {
      headers: {
        'Authorization': 'Token ccd396af99a934a5290b68add5bb1dbeb812cb18'
      }
    })
    .then(res => {setTasks(res.data)})
  }, [])

  const getTask = () => {
    axios.get(`http://127.0.0.1:8000/api/tasks/${id}/`, {
      headers: {
        'Authorization': 'Token ccd396af99a934a5290b68add5bb1dbeb812cb18'
      }
    })
    .then(res => {setSelectedTask(res.data)})
  }

  const deleteTask = (taskId) => {
    axios.delete(`http://127.0.0.1:8000/api/tasks/${taskId}/`, {
      headers: {
        'Authorization': 'Token ccd396af99a934a5290b68add5bb1dbeb812cb18'
      }
    })
    .then(res => {setTasks(tasks.filter(task => task.id !== taskId)); setSelectedTask([])})
  }

  const newTask = (task) => {
    const data = {
      title: task.title
    }
    axios.post(`http://127.0.0.1:8000/api/tasks/`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ccd396af99a934a5290b68add5bb1dbeb812cb18'
      }
    })
    .then(res => {
      setTasks([...tasks, res.data])
      setEditedTask({ id: "", title: "" });
    })
  }

  const editTask = (task) => {
    axios.put(`http://127.0.0.1:8000/api/tasks/${task.id}/`, task, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ccd396af99a934a5290b68add5bb1dbeb812cb18'
      }
    })
    .then(res => {
      setTasks(tasks.map((task) => (task.id === editedTask.id ? res.data : task)));
      setEditedTask({ id: "", title: "" });
    })
  }

  const handleInputChange = () => event => {
    const value = event.target.value;
    const name = event.target.name;
    setEditedTask({...editedTask, [name]: value})
  }

  return (
    <div>
      <ul>
        {
          tasks.map(task =>
          <li key={task.id}>
            {task.id}: {task.title}
            <button onClick={() => deleteTask(task.id)}>
              <i className='fas fa-trash-alt'></i>
            </button>
            <button onClick={() => setEditedTask(task)}>
              <i className='fas fa-pen'></i>
            </button>
          </li>)
        }
      </ul>

      Set id <br/>
      <input type='text' value={id} onChange={event=>{setId(event.target.value)}} />
      <br/>
      <button type='button' onClick={() => getTask()}>Get task</button>
      <h3>{selectedTask.title} {selectedTask.id}</h3>

      <input type='text' name='title' value={editedTask.title} onChange={handleInputChange()} placeholder='New Task ?' required />
      { editedTask.id ? <button onClick={()=> editTask(editedTask)} >Update Task</button> : <button onClick={()=> newTask(editedTask)} >Create Task</button> }
    </div>
  )
}

export default DrfApiFetch
