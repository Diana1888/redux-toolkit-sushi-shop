import "./App.css";
import Cart from "./Components/Cart/Cart";
import AllCategories from "./Components/Filter/AllCategories";
import Plates from "./Components/PlatesComponents/Plates";
import { useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [isActive, setActive] = useState(false);

  const toggleCart = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <Navbar toggleCart={toggleCart} />

      <div className="app">
        <div className="block">
          <AllCategories />
          <Plates />
        </div>
        <div className="block">
          <div className={isActive ? "cartBlock open" : "cartBlock close"}>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
