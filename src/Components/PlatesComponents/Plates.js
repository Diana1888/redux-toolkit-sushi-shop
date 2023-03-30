import { useSelector } from "react-redux";
import dataSushi from "../../Data/dataSushi";
import { getSelectedCategory } from "../../Redux/platesSlice";
import Plate from "./Plate";

const Plates = () => {
  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <div className="plates" >
      {dataSushi
        .filter((plate) => {
          if (selectedCategory === "ALL") return true;
          return selectedCategory === plate.category;
        })
        .map((plate) => (

          <Plate plate={plate} key={plate.id}/>
        ))}
    </div>
  );
};

export default Plates;
