import {
    HashRouter,
    Route,
    Routes
  } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Jobs from "./pages/Jobs"

const Router = () => {
    return (
      <HashRouter >
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
        </Routes>
      </HashRouter>
    )
  }
export default Router;