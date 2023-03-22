import { useDispatch } from "react-redux";
import dataSushi from "./../../Data/dataSushi";
import { removeItemFromCart } from "../../Redux/cartSlice";

const CartItem = ({ cartItem }) => {
  console.log(cartItem);

  const plates = dataSushi.find((item) => item.id === cartItem.plateId);
  const dispatch = useDispatch();
  console.log(cartItem);
  return (
    <div className="cart-item">
      <img src={`./${cartItem.img}.jpeg`} className="cart-img" />
      <div className="item-text">
        <p>
          {plates.name} <span>{cartItem.quantity} portion(s)</span>
        </p>
        <p>Price: $ {plates.price * cartItem.quantity}</p>
      </div>
      <span
        onClick={() =>
          dispatch(removeItemFromCart({ cartItemId: cartItem.id }))
        }
      >
        <img
          className="deleteIcon"
          src="https://img.icons8.com/ios-glyphs/30/null/delete.png"
        />
      </span>
    </div>
  );
};

export default CartItem;
