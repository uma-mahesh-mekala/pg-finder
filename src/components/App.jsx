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
import Faq from "../pages/help/Faq";
import Hostels, { hostelsLoader } from "../pages/hostels/Hostels";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootTemplate />}>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpTemplate />}>
          <Route path="faq" element=<Faq /> />
          <Route path="contact" element=<ContactForm /> />
        </Route>
        <Route path="/hostels" element={<Hostels />} loader={hostelsLoader} />
        <Route path="*" element={<NotFoundErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
