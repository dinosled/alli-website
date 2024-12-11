import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutAlli from "./pages/AboutAlli";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Imprint from "./pages/Imprint";
import SupportUs from "./pages/SupportUs";
import Feedback from "./pages/Feedback";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-alli" element={<AboutAlli />} />
        <Route path="/about" element={<About />} />
        <Route path="/support-us" element={<SupportUs />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
    </HashRouter>
  );
};
export default Router;
