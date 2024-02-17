import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DrfApiFetch = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/tasks/', {
      headers: {
        'Authorization': 'Token ccd396af99a934a5290b68add5bb1dbeb812cb18'
      }
    })
    .then(res => {setTasks(res.data)})
  }, [])

  return (
    <div>
      <ul>
        {
          tasks.map(task => <li key={task.id}> {task.id}: {task.title} </li>)
        }
      </ul>
    </div>
  )
}

export default DrfApiFetch
