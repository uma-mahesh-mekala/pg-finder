import { useRouteError, Link } from "react-router-dom";

function HostelsError() {
  const error = useRouteError();

  return (
    <div className="hostels-error">
      <h2>Oops, There was an error</h2>
      <p>{error.message}</p>
      <Link to="/">Go To Homepage</Link>
    </div>
  );
}

function HostelDetailsError() {
  const error = useRouteError();
  return (
    <div className="hostel-error">
      <h2>Oops, There was an error</h2>
      <p>{error.message}</p>
      <Link to="/">Go To Homepage</Link>
    </div>
  );
}

function NewHostelDetailsError() {
  const error = useRouteError();
  return (
    <div className="hostel-error">
      <h2>Oops, There was an error</h2>
      <p>{error.message}</p>
      <Link to="/">Go To Homepage</Link>
    </div>
  );
}
export { HostelsError, HostelDetailsError, NewHostelDetailsError };
