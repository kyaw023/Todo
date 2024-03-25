import React, { useEffect, useState } from "react";

const AllBtnComponent = ({ deleteCompletedLists, filterBy }) => {
  const [filterBtn, setFilterBtn] = useState("All");

  useEffect(() => {
    filterBy(filterBtn);
  }, [filterBtn, filterBy]);

  return (
    <div className=" flex items-center justify-between py-3">
      <div className=" space-x-2">
        <button
          onClick={() => setFilterBtn("All")}
          className={`${
            filterBtn === "All"
              ? "border border-slate-300 p-1 rounded shadow text-sm"
              : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilterBtn("Active")}
          className={`${
            filterBtn === "Active"
              ? "border border-slate-300 p-1 rounded shadow text-sm"
              : ""
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilterBtn("Completed")}
          className={`${
            filterBtn === "Completed"
              ? "border border-slate-300 p-1 rounded shadow text-sm"
              : ""
          }`}
        >
          Completed
        </button>
      </div>
      <div>
        <button
          onClick={deleteCompletedLists}
          className=" border border-slate-300 p-1 rounded shadow text-sm"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default AllBtnComponent;
