import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/*------------------------------------Import all the pages--------------------------------------------*/
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Setting from "./pages/Setting";
import Cart from "./pages/Cart";
import DataTableTemplatingDemo from "./pages/Product";

import Product2 from "./pages/Product2";

/*------------------------------------Navigate them in routes--------------------------------------------*/
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
            <Route path="/cart" element={<Cart />}/>


            <Route path="/product/:category" element={<Product2/>}/>
          </Routes>
        </div>
      </div>
    </Router>
);
};

export default App;
