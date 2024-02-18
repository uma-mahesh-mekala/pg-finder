import { useLoaderData, Link } from "react-router-dom";

function createHostelElemet(props) {
  return (
    <Link
      to={`/hostels/${props.id.toString()}`}
      key={props.id}
      className="hostel"
    >
      <h3>Hostle Name: {props.name}</h3>
      <p>Location: {props.address.location}</p>
      <p>city: {props.address.city}</p>
      <p>Beds Available: {props.bedsAvailable}</p>
    </Link>
  );
}

function Hostels() {
  const hostels = useLoaderData();
  return (
    <div className="hostels-container">{hostels.map(createHostelElemet)}</div>
  );
}

async function hostelsLoader() {
  const res = await fetch("http://localhost:4000/hostels");

  if (!res.ok) {
    throw Error("Could not fetch hostels, please try again later.");
  }

  return res.json();
}

export default Hostels;
export { hostelsLoader };
