import { CartIcon } from "./Data/icons";
import { useSelector } from "react-redux";

import { getTotalQuantity } from "./Redux/cartSlice";
import { useState } from "react";




const Navbar = () => {
    const [isActive, setActive] = useState(false);

    const toggleCart = () => {
      setActive(!isActive);
    };
  

const totalQuantity = useSelector(getTotalQuantity);

    return(
<div>hi</div>
    )
}

export default Navbar;

