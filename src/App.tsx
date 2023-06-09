import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import AboutPage from "./pages/About/AboutPage";
import ServicePressureCheck from "./pages/Service/ServicePressureCheck";
import Product from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";
import Faq from "./pages/Page/Faq";
import PrivacyPolicy from "./pages/Page/Privacy-policy";
import TermConditions from "./pages/Page/Term-conditions";

function App() {
  return (
    <Router>
      <HeaderWrapper />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" />
        <Route
          path="/services/pressure-check"
          element={<ServicePressureCheck />}
        />
        <Route path="/products" element={<Product />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/pages" />
        <Route path="/pages/faq" element={<Faq />} />{" "}
        <Route path="/pages/privacy-policy" element={<PrivacyPolicy />} />{" "}
        <Route path="/pages/term-conditions" element={<TermConditions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function HeaderWrapper() {
  const location = useLocation();
  const { pathname } = location;
  const isHomepage = pathname === "/";

  return isHomepage ? (
    <Header
      style={{ background: "transparent", top: "30px" }}
      location={location}
    />
  ) : (
    <Header
      style={{ background: "black", top: "" }}
      hideFirstDiv={true}
      logoHeight={true}
      location={location}
    />
  );
}

export default App;
