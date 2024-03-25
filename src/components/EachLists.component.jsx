import React, { useState } from "react";

const EachListsComponent = ({ list, deleteLists, updateTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(list.title);

  const doubleHandler = () => {
    setIsEdit(true);
  };

  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const updateData = {
      id: list.id,
      title,
      completed: list.completed,
    };

    updateTodo(updateData);

    setIsEdit(false);
  };

  const checkedHandler = () => {
    let updateData = {
      id: list.id,
      title,
      completed: (!list.completed),
    };

    console.log(updateData);

    updateTodo(updateData);
  };

  return (
    <div>
      <div className=" flex items-center justify-between select-none">
        <div className=" flex items-center gap-3">
          <input
            type="checkbox"
            checked={list.completed}
            onChange={checkedHandler}
          />
          <div>
            {isEdit ? (
              <form onSubmit={submitHandler}>
                <input
                  onChange={onChangeHandler}
                  className=" border my-4 border-slate-300 px-2 py-2 w-full rounded outline-none text-sm"
                  type="text"
                  value={title}
                  placeholder="What do you need to do?"
                />
              </form>
            ) : (
              <p
                className={`${list.completed ? " line-through" : ""}`}
                onDoubleClick={doubleHandler}
              >
                {list.title}
              </p>
            )}
          </div>
        </div>
        <div
          onClick={() => deleteLists(list.id)}
          className=" border rounded shadow active:scale-110 duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default EachListsComponent;
