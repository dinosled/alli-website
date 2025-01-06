import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetInvolved from "./pages/GetInvolved";
import SupportUs from "./pages/SupportUs";
import Information from "./pages/InformationQualifiedPersonell"
import Feedback from "./pages/Feedback"

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-alli" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/support-us" element={<SupportUs />} />
        <Route path="/for-doctors" element={<Information />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
    </HashRouter>
  );
};
export default Router;
