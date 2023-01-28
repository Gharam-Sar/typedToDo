import trash from "../imgs/trash.png";
import '../App.css';
import * as React from 'react';

type ToDoProps = {
  todo: { id: number, task: string,done:boolean }
  filtertext: string
  toggle: boolean
  setTodo:Function
}
export default function ToDo ({todo, filtertext, toggle,setTodo}: ToDoProps){
  const handleDelete = (id:number) => {
 
    var newtodo = [];
    var ids = parseInt(localStorage.getItem("ids")!) - 1;
    var displaytodo = JSON.parse(localStorage.getItem("todo")!);
    newtodo = displaytodo.slice(0, id - 1);

    for (var i = id - 1; i < ids; i++) {
      var str = displaytodo[i + 1];
      str.id = i + 1;
      newtodo.push(str);
    }

    localStorage.setItem("todo", JSON.stringify(newtodo));

    localStorage.setItem("ids", ids.toString());
    setTodo(newtodo);

};
const handleToggle = (id:number) => {
              var displaytodo = JSON.parse(localStorage.getItem("todo")!);
              if (displaytodo[id - 1].done) displaytodo[id - 1].done = false;
              else displaytodo[id - 1].done = true;
  
              localStorage.setItem("todo", JSON.stringify(displaytodo));
              setTodo(displaytodo);

};
    return (
      <div className="myDiv" key={todo.id}>
        <h2>Task number: {todo.id}</h2>
        <h2>task: {todo.task}</h2>
        <h2 style={{ color: todo.done ? "green" : "red" }}>
          <span
                         onClick={() => handleToggle(todo.id)}

          >
            {" "}
            {todo.done ? "✔" : "X"}{" "}
          </span>
  
          <img
             onClick={() => handleDelete(todo.id)}
            src={trash}
            style={{  }}
            height= "28px"
            alt="trash"
          ></img>
        </h2>
        <h2></h2>
        <hr />
      </div>
    );
  }
