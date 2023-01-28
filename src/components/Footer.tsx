import '../App.css';
import * as React from 'react';
export default function Footer() {
    var storedtodo = JSON.parse(localStorage.getItem("todo")!);
    var num_todo = storedtodo.length;
    var done = 0;
    var notDone = 0;
    for (var i = 0; i < storedtodo.length; i++) {
      if (storedtodo[i].done) done++;
      else notDone++;
    }
    return (
      <div style={{ color: "white", fontSize: "20px" }} className="componant">
        Number of to dos in the list= {num_todo} ---- Number of done to dos={" "}
        {done} ---- Number of to be done to dos= {notDone}
      </div>
    );
  }