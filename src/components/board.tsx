import React, { useEffect, useState } from "react";
import List from "./list";
import './styles/board.css';


const Board = () => {
  // arr of objects {tasks: task[], listTitle}
  const [todoList, setTodoList] = useState([]);

  const handleListCreate = () => {
    const newTodoList = JSON.parse(JSON.stringify(todoList));
    
    newTodoList.push({id: todoList.length });
    
    setTodoList(newTodoList);
  }

  const listRemoveCallback = (id: number) => {
    const newTodoList = JSON.parse(JSON.stringify(todoList));
    
    newTodoList[id] = null;
    
    setTodoList(newTodoList);
  }

  return (
    <div className="board">
      {todoList.map((taskList) =>
        taskList != null ? <List removeCallback={listRemoveCallback} id={taskList.id} key={taskList.id} /> : ""
      )}
      <button onClick={() => handleListCreate()}><img className="icon" src="/plus.svg" alt="add" />Add List</button>
    </div>
  );
}

export default Board;
