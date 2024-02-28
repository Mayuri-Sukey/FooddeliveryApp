
import React from "react" ;
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
function App() {
  return (
   <Router >
     <Routes>
       <Route path = "/" element= {<Home />} />
       <Route path = "/about" element= {<About/>} />
     </Routes>
   </Router>
  );
}

export default App;
