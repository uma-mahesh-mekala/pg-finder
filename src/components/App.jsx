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
import {
  HostelDetailsError,
  HostelsError,
  NewHostelDetailsError,
} from "../pages/hostels/HostelsError";

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
          <Route
            path="all"
            element={<Hostels />}
            loader={hostelsLoader}
            errorElement={<HostelsError />}
          />
          <Route
            path="new"
            element={<HostelForm />}
            loader={hostelsLoader}
            action={hostelSubmitAction}
            errorElement={<NewHostelDetailsError />}
          />
          <Route
            path=":id"
            element={<HostelDetail />}
            loader={hostelDetailLoader}
            errorElement={<HostelDetailsError />}
          />
        </Route>

        <Route path="*" element={<NotFoundErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
