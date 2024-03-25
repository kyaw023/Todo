import React, { useCallback, useEffect, useState } from "react";
import TodoListsComponent from "./components/TodoLists.component";
import ClearAndRemainComponent from "./components/ClearAndRemain.component";

import TodoFormComponent from "./components/TodoForm.component";
import AllBtnComponent from "./components/AllBtn.component";

const App = () => {
  const [lists, setLists] = useState([]);
  const [todos, setTodos] = useState(lists);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => {
        setLists(data);
        setTodos(data);
      })
      .catch((error) => console.error(error));
  }, []);

  let filterBy = useCallback(
    (filterName) => {
      if (filterName === "All") {
        setTodos(lists);
      }
      if (filterName === "Active") {
        setTodos(lists.filter((l) => !l.completed));
      }
      if (filterName === "Completed") {
        setTodos(lists.filter((l) => l.completed));
      }
    },
    [lists]
  );

  const addTodo = (list) => {
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(list),
    });
    setLists((prevState) => [...prevState, list]);
  };

  let deleteLists = (todoId) => {
    fetch(`http://localhost:3000/todos/${todoId}`, {
      method: "DELETE",
    });
    setLists((prevState) => {
      return prevState.filter((todo) => {
        return todo.id !== todoId;
      }); // [todo,todo]
    });
  };

  const updateTodo = (updateLists) => {
    fetch(`http://localhost:3000/todos/${updateLists.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(updateLists),
    });
    setLists((prev) => {
      return prev.map((item) => {
        if (item.id === updateLists.id) {
          return updateLists;
        } else {
          return item;
        }
      });
    });
  };

  const checkAllTodo = () => {
    lists.forEach((l) => {
      l.completed === true, updateTodo(l);
    });
    setLists((prev) => {
      return prev.map((item) => {
        return { ...item, completed: true };
      });
    });
  };

  const deleteCompletedLists = () => {
    lists.forEach((l) => {
      if (l.completed) {
        deleteLists(l.id);
      }
    });
    setLists((prev) => {
      return prev.filter((l) => !l.completed === true);
    });
  };

  return (
    <div className=" flex items-center justify-center h-screen bg-slate-200">
      <div className=" w-[540px] h-auto bg-white border border-slate-300 rounded p-10 shadow">
        <TodoFormComponent addTodo={addTodo} />
        {/* todo lists */}
        <TodoListsComponent
          lists={todos}
          deleteLists={deleteLists}
          updateTodo={updateTodo}
        />
        <ClearAndRemainComponent checkAllTodo={checkAllTodo} />
        <AllBtnComponent
          deleteCompletedLists={deleteCompletedLists}
          filterBy={filterBy}
        />
      </div>
    </div>
  );
};

export default App;
