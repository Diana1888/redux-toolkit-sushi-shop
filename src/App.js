import "./App.css";
import Cart from "./Components/Cart/Cart";
import AllCategories from "./Components/Filter/AllCategories";
import Plates from "./Components/PlatesComponents/Plates";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { toggleCart } from "./Redux/cartSlice";

function App() {
  const showCart = useSelector(toggleCart);

  return (
    <div>
      <Navbar />
      <div className="app">
        <div className="block">
          <AllCategories />
          <Plates />
        </div>
        {showCart && <Cart />}
      </div>
    </div>
  );
}

export default App;
