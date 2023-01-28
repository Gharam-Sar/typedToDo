import '../App.css';
import * as React from 'react';
import { useState } from "react";
import Tasks from './Tasks';
import SearchBar from './SearchBar';

type ToDoSpaceProps = {
  displayTodo: { id: number; task: string,done:boolean }[]
  setTodo:Function
  }
export default function ToDoSpace({displayTodo,setTodo}: ToDoSpaceProps){
    const [filterText, setFilterText] = useState("");
    const [toggle, settoggle] = useState(false);
  
    return (
      <div>
        <SearchBar
          filterText={filterText}
          toggle={toggle}
          onFilterTextChange={setFilterText}
          ontoggleChange={settoggle}
        />
  
        <Tasks
          displayTodo={displayTodo}
          filterText={filterText}
          toggle={toggle}
          setTodo={setTodo}
        />
      </div>
    );
  }