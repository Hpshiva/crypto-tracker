import React from "react";

function SearchBar() {
  return (
    <div className="hidden md:block">
      <input
        type="text"
        placeholder="Search coins..."
        className="
          w-64
          rounded-lg
          border border-slate-700
          bg-slate-900
          px-4 py-2
          text-sm
          outline-none
          focus:border-blue-500
        "
      />
    </div>
  );
}

export default SearchBar;
