import { useState } from "react"
import Tasks from "./comp/Tasks";
import Header from "./comp/Header";
import AddTask from "./comp/AddTask";


function App() {
  const[showAddTask, setShowAddtask] = useState
  (false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors appointment",
        day: "Feb 5th at 3:30 PM",
        reminder: true
    },
    {
        id: 2,
        text: "Meeting",
        day: "Feb 8th at 6:30 PM",
        reminder: true
    },
    {
        id: 3,
        text: "Presenation",
        day: "Feb 16th at 1:30 PM",
        reminder: true
    }
])



  //Add tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() *10000)+1

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])

  }


  //delete Task 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }


  //reminder
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
  }




  return (
    <div className='contanier'>
     <Header onAdd={() => setShowAddtask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete= {deleteTask} onToggle ={toggleReminder}/> : (
      'No Taks to  show')}
    </div>
  );
}



export default App;
