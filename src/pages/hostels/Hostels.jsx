import { useLoaderData } from "react-router-dom";

function createHostelElemet(props) {
  return (
    <div className="hostel" key={props.id}>
      <p>Hostle Name: {props.name}</p>
      <p>Village: {props.location.village}</p>
      <p>city: {props.location.city}</p>
      <p>pincode: {props.location.pincode}</p>
      {props.location.landmark && <p>landmark: {props.location.landmark}</p>}
      <p>Availability: {props.available}</p>
      <p>Starting Price: Rs {props.startingPrice} /-</p>
      <p>Contact: {props.contact}</p>
    </div>
  );
}
function Hostels() {
  const hostels = useLoaderData();
  console.log(hostels);
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
