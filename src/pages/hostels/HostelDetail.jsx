import { useLoaderData } from "react-router-dom";

function HostelDetail() {
  const hostel = useLoaderData();
  return (
    <div className="hostel-details">
      <h1>{hostel.name}</h1>
      <p>Location: {hostel.address.location}</p>
      <p>City: {hostel.address.city}</p>
      <p>Pincode: {hostel.address.pincode}</p>
      <p>Landmark: {hostel.address.landmark}</p>
      <p>Beds Available: {hostel.bedsAvailable} </p>
      <p>Starting Price: {hostel.startingPrice}</p>
      <p>Contact: {hostel.contact}</p>
    </div>
  );
}

async function hostelDetailLoader({ params }) {
  const res = await fetch("http://localhost:4000/hostels/" + params.id);

  if (!res.ok) {
    throw Error("There was an Error Fetching Hostel Details");
  }
  return res.json();
}

export default HostelDetail;
export { hostelDetailLoader };
