import { NavLink, Outlet } from "react-router-dom";

function HostelTemplate() {
  return (
    <div className="hostel-template">
      <div className="hostel-template-guide">
        <i>Click on Hostels to see the list of all hostels available</i>
        <i>Click on Add Hostle to add new Hostel</i>
      </div>
      <nav>
        <NavLink index>Hostels</NavLink>
        <NavLink to="new">Add Hostel</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HostelTemplate;
