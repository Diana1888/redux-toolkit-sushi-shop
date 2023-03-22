import "./App.css";
import Cart from "./Components/Cart/Cart";
import AllCategories from "./Components/Filter/AllCategories";
import Plates from "./Components/PlatesComponents/Plates";
import { useState } from "react";
import { CartIcon } from "./Data/icons";
import { getTotalQuantity } from "./Redux/cartSlice";
import { useSelector } from "react-redux";
import imgSushi from "./Data/sushi-icon.png";

function App() {
  const [isActive, setActive] = useState(false);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 150) {
      setColor(true);
    } else setColor(false);
  };

  window.addEventListener("scroll", changeColor);

  const toggleCart = () => {
    setActive(!isActive);
  };
  const totalQuantity = useSelector(getTotalQuantity);

  return (
    <div>
      <div className={color ? "header nav-bg" : "header"}>
        <nav className="nav">
          <div className="nav-center">
            <img className="img-sushi" src={imgSushi} alt="icon" />
            <h1>Sushi Shop</h1>
            <div className="nav-container">
              <div className="toggle-btn">
                <button className="toggle-btn" onClick={toggleCart}>
                  <CartIcon />
                </button>
                <div className="amount-container">
                  <span className="total-quantity">{totalQuantity}</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <img
        className="main"
        src="https://images.unsplash.com/photo-1627462133149-167e7e9a91b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1211&q=80"
        alt="background"
      />

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