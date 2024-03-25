import React, { useEffect, useState } from "react";
import EachListsComponent from "./EachLists.component";

const TodoListsComponent = ({ lists, deleteLists, updateTodo }) => {
  return (
    <div className=" border-b border-slate-300 py-3">
      <div className=" flex flex-col space-y-3">
        {lists?.map((list) => {
          return (
            <EachListsComponent
              key={list.id}
              list={list}
              deleteLists={deleteLists}
              updateTodo={updateTodo}
              
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoListsComponent;
