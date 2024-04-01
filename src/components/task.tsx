import { useState } from 'react';
import './styles/task.css';

// TODO: THIS WILL BE A DRAG AND DROP ELEMENT
// REASEARCH ABOUT IT !!!!!

interface Props {
  id: number,
  removeCallback: (id: number) => void,
}

const Task = ({id, removeCallback}: Props) => {
  const [created, setCreated] = useState(false);
  const [content, setContent] = useState('');
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      <><div onContextMenu={(e) => {
        e.preventDefault();
        
      }} className={created ? 'task': 'task-create'} draggable>
        { created ? <><input className='task-checkbox' type='checkbox' onChange={() => setIsDone(!isDone)} />{isDone ? <s>{content}</s> : content}</> : <input type='text' onChange={ e => setContent(e.target.value)}/> }
        { created ? <button className='add-button' onClick={() => removeCallback(id)}>x</button> : <button className='add-button' onClick={() => setCreated(true)}>+</button> }
      </div>

      </>
    </>
  );
}

export default Task;
