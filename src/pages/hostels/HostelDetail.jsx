function HostelDetail() {}

async function hostelDetailLoader({ params }) {
  const res = await fetch("http://localhost:4000/hostels" + params.id);

  return res.json();
}

export default HostelDetail;
export { hostelDetailLoader };
