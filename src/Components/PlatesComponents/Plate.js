import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Plate = ({ plate }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className="plate">
      <h2>{plate.name}</h2>
      <img src={`./${plate.img}.jpeg`} alt="plate-img" />
      <p>${plate.price}</p>
      <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
      <button
        className="btn-add"
        onClick={() => {
          dispatch(addItemToCart({ plate, quantity }));
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Plate;
