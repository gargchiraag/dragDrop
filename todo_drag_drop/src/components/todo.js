import "./todo.css";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TodoTask from "./todoTask.js";

function Todo() {
  const [datainput, SetData] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleTaskDelete = (updatedData) => {
    SetData(updatedData);
  };

  const onSubmit = (e) => {
    let temp = [...datainput];
    temp.push(e.title);
    SetData(temp);
    handleTaskDelete(temp);
  };

  return (
    <>
      <div id="todoForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>Todo Create</span>
          <label>Enter the Task</label>
          <input id="addInput" type="text" placeholder="Enter Task" {...register('title', {
            required: "Title is required!",
            minLength: {
              value: 3,
              message: "Length is too short"
            }
          })} />
          {errors.title?.message}
          <button id="addBtn" type="submit">Add</button>
        </form>
      </div>
      <TodoTask task={datainput} onDelete={handleTaskDelete} />
    </>
  );
}

export default Todo;
