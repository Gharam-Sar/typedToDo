import '../App.css';
import * as React from 'react';
var todo:{ id: number; task: string,done:boolean }[] = [];
type AddProps = {
  newTask: string
  
  setTask:Function
  displayTodo: { id: number; task: string,done:boolean }[]
  setTodo:Function
}
export default function AddTask ({newTask, setTask,displayTodo,setTodo}: AddProps){

    const storedtodo:{ id: number; task: string,done:boolean }[] = JSON.parse(localStorage.getItem("todo")!);
    todo = storedtodo.slice(0);
    const handle_add_task = () => {
      var new_id:number = parseInt(localStorage.getItem("ids")!) + 1;
      todo.push({ id: new_id, task: newTask, done: false });
      localStorage.setItem("todo", JSON.stringify(todo));
  
      localStorage.setItem("ids", new_id.toString());
      setTodo(todo);
    };
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                {" "}
                <label>Task</label> &nbsp;
              </td>
              <td>
                <input
                  type="text"
                  id="taskName"
                  name="task name"
                  value={newTask}
                  onChange={(e) => setTask(e.target.value)}
                />
              </td>
              <td>
                &emsp;&nbsp;
                <button className="addButton" onClick={handle_add_task}>
                  {" "}
                  Add{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }