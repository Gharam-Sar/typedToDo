
import './App.css';
import * as React from 'react';
import { useState } from "react";
import ToDoSpace from './components/ToDoSpace';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
var s:string[] = [];

if (localStorage.length === 0) {
  var z:number=0;
  localStorage.setItem("ids", z.toString());

  localStorage.setItem("todo", JSON.stringify(s));
}
function App() {
  const [newTask, setTask] = useState("");
  
  const [storedTodo, setTodo] = useState(JSON.parse(localStorage.getItem("todo")!));
  
  var v={ id: 1, task: "ddd",done:true };
  return (
    <div>
      <div className="title">
        <h1>To Do List</h1>
      </div>
      <div className="componant">
      
      <AddTask  newTask={newTask} setTask={setTask} displayTodo={storedTodo} setTodo={setTodo}/>
      </div>
      <hr></hr>

      <div>
        <ToDoSpace displayTodo={storedTodo} setTodo={setTodo} />
      </div>

      <hr></hr>
      <Footer></Footer>
    </div>
  );
}
export default App;
