import { Form, redirect } from "react-router-dom";
function HostelForm() {
  return (
    <Form className="hostel-form" method="post">
      <input type="text" name="name" placeholder="Hostel Name" />
      <input type="text" name="location" placeholder="Location" />
      <input type="text" name="city" placeholder="City" />
      <input type="text" name="pincode" placeholder="Pincode" />
      <input type="text" name="landmark" placeholder="Landmark" />
      <input type="number" name="bedsAvailable" placeholder="Beds Available" />
      <input type="number" name="startingPrice" placeholder="Starting Price" />
      <input type="text" name="contact" placeholder="Contact Number" />
      <button type="submit">Submit</button>
    </Form>
  );
}

async function hostelSubmitAction({ request }) {
  const formData = await request.formData();
  const hostelBody = {
    name: formData.get("name"),
    address: {
      location: formData.get("location"),
      city: formData.get("city"),
      pincode: formData.get("pincode"),
      landmark: formData.get("landmark"),
    },
    bedsAvailable: formData.get("bedsAvailable"),
    startingPrice: formData.get("startingPrice"),
    contact: formData.get("contact"),
  };

  const getHostels = await fetch("http://localhost:4000/hostels");
  const hostels = await getHostels.json();

  if (getHostels.ok) {
    hostelBody.id = hostels.length + 1;
    const url = "http://localhost:4000/hostels";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hostelBody),
    });

    if (!res.ok) {
      throw Error("There was error adding the hostel");
    }
  }
  return redirect("/hostels/all");
}

export default HostelForm;
export { hostelSubmitAction };
