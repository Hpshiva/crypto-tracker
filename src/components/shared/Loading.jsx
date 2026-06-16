import React from "react";

function Loading({ heading, loading }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="mb-4 text-xl font-semibold">{heading}</h2>
      <p className="text-slate-400">{loading}</p>
    </div>
  );
}

export default Loading;
