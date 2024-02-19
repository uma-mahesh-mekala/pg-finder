import { useLoaderData, Link } from "react-router-dom";
import hostels from "../../data/hostels";

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
  const res = hostels;

  return res;
}

export default Hostels;
export { hostelsLoader };
