import { NavLink, Outlet } from "react-router-dom";

function RootTemplate() {
  return (
    <div className="root-templaate">
      <header>
        <nav>
          <h1>PG FINDER</h1>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/help">HELP</NavLink>
          <NavLink to="/hostels">PG HOSTELS</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootTemplate;
