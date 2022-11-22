import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Navbar
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Setting from "./pages/Setting";
import DataTableTemplatingDemo from "./pages/Product";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/product" element={<DataTableTemplatingDemo />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/usersettings" element={<Setting />}/>
          </Routes>
        </div>
      </div>
    </Router>
);
}

export default App;
