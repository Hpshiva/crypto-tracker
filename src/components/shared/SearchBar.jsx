import React, { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import useCryptoData from "../../hooks/useCryptoData";

function SearchBar() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  console.log({ query });

  const {
    data: results,
    loading,
    error,
  } = useCryptoData(
    "/search",
    { query: debouncedQuery },
    (response) => response.data.coins,
  );
  console.log(results);
  return (
    <div className="hidden md:block">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
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
