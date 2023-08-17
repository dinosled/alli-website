import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
// import Insights from './pages/Insights';
// import Participate from './pages/Participate';
// import Contact from './pages/Contact';

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/about" element={<About/>}/>
          {/* <Route path="/insights" element={<Insights/>}/> */}
          {/* <Route path="/participate" element={<Participate/>}/> */}
          {/* <Route path="/Contact" element={<Contact/>}/> */}
        </Routes>
      </BrowserRouter>
    )
  }
export default Router;