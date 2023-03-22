import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../Redux/cartSlice";
import CartItem from "./CartItem";
import { getTotalQuantity } from "../../Redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);
  const totalQuantity = useSelector(getTotalQuantity);

  if (totalQuantity < 1) {
    return (
      <div>
        <h3>SHOPPING CART</h3>
        <div className="cart-item">
          <h3>Cart is empty</h3>
        </div>
        <div className="cart-foot">
          <div className="total">
            <h3>{totalQuantity} item(s)</h3>
            <h3>Total: $ {totalPrice}</h3>
          </div>
          <div>
            <button
              className="btn-add"
              onClick={() => alert("THIS IS UNDER CONSTRUCTION!")}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3>SHOPPING CART</h3>
      <div className="cart-list">
        {cartItems.map((cartItem) => (
          <CartItem cartItem={cartItem} />
        ))}
      </div>
      <div className="cart-foot">
        <div className="total">
          <h3>{totalQuantity} item(s)</h3>
          <h3>Total: $ {totalPrice}</h3>
        </div>
        <div>
          <button
            className="btn-add"
            onClick={() => alert("THIS IS UNDER CONSTRUCTION!")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
