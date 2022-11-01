
import Header from "./components/Header";
import Task from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react"

function App() {
  

  const [ tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Meeting the Doctor',
        day: 'Monday, 12:00pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Going to school',
        day: 'Tuesday, 01:45am',
        reminder: false
      },
      {
        id: 3,
        text: 'Alhamdulillahi, its Friday',
        day: 'Friday, 12:45pm',
        reminder: true
      },
      {
        id: 4,
        text: 'Going on a date',
        day: 'Saturday, 07:00am',
        reminder: true
      },
])


//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000 ) + 1

  const newTask = {id, ...task}

  setTasks([...tasks, newTask])


}
 
//Delete Task 
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !==id 

  ))
}

//Toggle Reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder  } : task))
 }

  return (
    <div className="container">
      <Header/>
      <AddTask onAdd = {addTask}/>
      {tasks.length > 0 ? <Task tasks= {tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No Task To Show"}
    </div>
  );
}

export default App;
