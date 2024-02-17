import { NavLink } from "react-router-dom";

function NotFoundErrorPage() {
  return (
    <div className="not-found-error-page">
      <h2>Not Found</h2>
      <p>Oops, Sorry Page Not Found</p>
      <p>
        Go to <NavLink>Home</NavLink>
      </p>
    </div>
  );
}

export default NotFoundErrorPage;
