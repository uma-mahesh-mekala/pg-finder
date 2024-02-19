import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function RootTemplate() {
  let [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="root-templaate">
      <header>
        <nav className={isMenuOpen ? "open" : ""}>
          <h1>PG FINDER</h1>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="nav-links">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/help">HELP</NavLink>
            <NavLink to="/hostels">PG HOSTELS</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootTemplate;
