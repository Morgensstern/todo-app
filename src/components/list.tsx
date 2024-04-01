import { useState } from "react";
import Task from "./task";

import './styles/list.css';

interface Props {
  id: number,
  removeCallback: (id: number) => void
}

const List = ({ id, removeCallback }: Props) => {
  const [created, setCreated] = useState(false);
  const [listTitle, setListTitle] = useState('');
  const [taskArr, setTaskArr] = useState([]);

  const handleCreate = () => {
    setCreated(true);
  }

  const handleCreateTask = () => {
    const newTaskArr = JSON.parse(JSON.stringify(taskArr));
    newTaskArr.push({ id: taskArr.length });
    
    setTaskArr(newTaskArr);
  }

const taskRemoveCallback = (id: number) => {
    const newTaskArr = JSON.parse(JSON.stringify(taskArr));
    
    newTaskArr[id] = null;
    
    setTaskArr(newTaskArr);
    console.log(newTaskArr);
  }

  return (
    <div
      className="list" draggable>
      {created ?
        <h1 className="list-title">{listTitle}</h1> :
        <input type="text" placeholder="New List..." onChange={e => setListTitle(e.target.value)} />}
      <hr />
      {
        taskArr.map(task =>
          task != null ? <Task removeCallback={taskRemoveCallback} id={task.id} /> : ""
        )
      }
      <div className="list-buttons-group">
        {created ?
          <button className="list-button" onClick={() => handleCreateTask()}><img className="icon" src="/plus.svg" alt="add" />Add Task</button>
          : <button className="list-button" onClick={() => handleCreate()}>Create List</button>
        }
        <button className="list-button neg-button" onClick={() => removeCallback(id)}>{created ? "Remove" : "Cancel"}</button>
      </div>
    </div>
  )}

export default List;
