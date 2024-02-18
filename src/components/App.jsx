import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "../pages/Homepage";
import RootTemplate from "../templates/RootTemplate";
import NotFoundErrorPage from "../pages/NotFoundErrorPage";
import About from "../pages/About";
import HelpTemplate from "../templates/HelpTemplate";
import ContactForm from "../pages/help/ContactForm";
import Faqs, { faqLoader } from "../pages/help/Faqs";
import Hostels, { hostelsLoader } from "../pages/hostels/Hostels";
import HostelTemplate from "../templates/HostelTemplate";
import HostelForm, { hostelSubmitAction } from "../pages/hostels/HostelForm";
import HostelDetail, {
  hostelDetailLoader,
} from "../pages/hostels/HostelDetail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootTemplate />}>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpTemplate />}>
          <Route path="faqs" element={<Faqs />} loader={faqLoader} />
          <Route path="contact" element={<ContactForm />} />
        </Route>
        <Route path="hostels" element={<HostelTemplate />}>
          <Route index element={<Hostels />} loader={hostelsLoader} />
          <Route
            path="new"
            element={<HostelForm />}
            loader={hostelsLoader}
            action={hostelSubmitAction}
          />
          <Route
            path="hostel/:id"
            element={<HostelDetail />}
            loader={hostelDetailLoader}
          />
        </Route>

        <Route path="*" element={<NotFoundErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
