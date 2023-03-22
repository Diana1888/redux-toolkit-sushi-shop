import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../Redux/platesSlice";

const Filter = ({ category }) => {
  const selectedCategory = useSelector(getSelectedCategory);
  const dispatch = useDispatch();

  return (
    <div className="category">
      <p
        onClick={() => {
          dispatch(filterCategory(category));
        }}
        className={
          selectedCategory === category
            ? "categorySelectedButton"
            : "categoryButton"
        }
      >
        {category}
      </p>
    </div>
  );
};

export default Filter;
