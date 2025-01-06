import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetInvolved from "./pages/GetInvolved";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/support-us" element={<SupportUs />} />
        <Route path="/information-for-qualified-personnel" element={<Information />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
    </HashRouter>
  );
};
export default Router;
