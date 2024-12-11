import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutAlli from "./pages/AboutAlli";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetInvolved from "./pages/GetInvolved";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-alli" element={<AboutAlli />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
    </HashRouter>
  );
};
export default Router;
