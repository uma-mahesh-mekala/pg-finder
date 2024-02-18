import { useLoaderData } from "react-router-dom";

function createHostelElemet(props) {
  return (
    <div className="hostel" key={props.id}>
      <h3>Hostle Name: {props.name}</h3>
      <p>Village: {props.location.village}</p>
      <p>city: {props.location.city}</p>
      <p>Beds Available: {props.bedsAvailable}</p>
    </div>
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

  return res.json();
}

export default Hostels;
export { hostelsLoader };
