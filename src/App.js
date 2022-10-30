
import Header from "./components/Header";
import Task from "./components/Tasks";
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
 
//Delete Task 
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !==id 
  ))

}
  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? <Task tasks= {tasks} onDelete={deleteTask}/> : "No Task To Show"}
    </div>
  );
}

export default App;
