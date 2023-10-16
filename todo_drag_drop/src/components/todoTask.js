import "./todoTask.css";
import { useState, useEffect, useRef } from "react";

function TodoTask({ task, onDelete }) {
  let [updatedList, setUpdatedList] = useState([]);

  useEffect(() => {
    setUpdatedList(task);
  }, [task]);
  const dragItem=useRef();
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };
  const dragOverItem = useRef();
  const drop = (e) => {
    const copyListItems = [...updatedList];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setUpdatedList(copyListItems);
  };
  return (
    <>
      <div id="mainDiv">
      <div id="todoTaskDiv">
        <h4>Todo Task</h4>
        {updatedList.map((tasks, index) => (
          <div key={index} className="task" onDragStart={(e) => dragStart(e, index)} onDragEnter={(e) => dragEnter(e, index)} onDragEnd={drop} draggable>
            {tasks}
            <button className="doneBtn" onClick={() => {
              let updatedRow = updatedList.filter((item, i) => i !== index);
              onDelete(updatedRow);
            }}>Done</button>
          </div>
        ))}
      </div>
      <div>
      <h4>In Process Task</h4>
      </div>
      </div>
    </>
  );
}

export default TodoTask;
