import { useLoaderData } from "react-router-dom";
import hostels from "../../data/hostels";

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
  const res = hostels.find((hostel) => hostel.id === params.id);

  if (!res) {
    throw Error("There was an Error Fetching Hostel Details");
  }
  return res;
}

export default HostelDetail;
export { hostelDetailLoader };
