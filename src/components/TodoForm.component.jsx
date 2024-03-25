import React, { useState } from "react";

const TodoFormComponent = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      id: Date.now(),
      title,
      completed: false,
    };
    console.log(data);
    setTitle("");
    addTodo(data);
  };

  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <div>
        <h1>Todo App</h1>
        <form onSubmit={submitHandler}>
          <input
            onChange={onChangeHandler}
            className=" border my-4 border-slate-300 px-2 py-2 w-full rounded outline-none text-sm"
            type="text"
            value={title}
            placeholder="What do you need to do?"
          />
        </form>
      </div>
    </div>
  );
};

export default TodoFormComponent;
