import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HelpTemplate() {
  return (
    <div className="help-template">
      <h3>Website Help</h3>
      <nav>
        <NavLink to="faqs">View FAQ</NavLink>
        <NavLink to="contact">ContactUs</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default HelpTemplate;
