import * as React from 'react';
import { useState } from "react";
import ToDo from './ToDo';
import '../App.css';

var searchtask = [];

type TasksProps = {
    filterText: string
    toggle: boolean
    displayTodo: { id: number; task: string,done:boolean }[]
    setTodo:Function
  }
  export default function Tasks ({displayTodo, filterText, toggle,setTodo}: TasksProps){

    if (toggle) displayTodo = [];
    const searchQuery = filterText.toLowerCase();
    searchtask = [];
    for (var j = 0; j < displayTodo.length; j++) {
      var str = displayTodo[j];
      var t = str.task;
  
      if (t.includes(searchQuery)) {
        searchtask.push(str);
      }
    }
    displayTodo = searchtask.slice(0);
    return (
      <div>
        <div className="tasks">
          {displayTodo.map((todo) => {
            return <ToDo todo={todo} filtertext={filterText} toggle={toggle} setTodo={setTodo}/>;
          })}
        </div>
      </div>
    );
  }
  