import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
// import "./app.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar/>
      <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
};

export default App;
