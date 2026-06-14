import { NavLink } from "react-router-dom";
import SearchBar from "../shared/SearchBar";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive ? "text-blue-400 font-medium" : "text-slate-300 hover:text-white";

  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-10">
          <h1 className="text-xl font-bold">CryptoDash</h1>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={navLinkClass}>
              Dashboard
            </NavLink>

            <NavLink to="/portfolio" className={navLinkClass}>
              Portfolio
            </NavLink>

            <NavLink to="/watchlist" className={navLinkClass}>
              Watchlist
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
