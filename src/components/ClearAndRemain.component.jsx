import React from "react";

const ClearAndRemainComponent = ({ checkAllTodo }) => {
  return (
    <div className=" border-b border-slate-300 py-3 flex items-center justify-between">
      <button
        onClick={checkAllTodo}
        className=" border border-slate-300 p-1 rounded shadow text-sm"
      >
        Check All
      </button>
      <p className=" text-sm text-slate-600">0 item remaining</p>
    </div>
  );
};

export default ClearAndRemainComponent;
