import Filter from "./Filter";

const AllCategories = () => {
  return (
    <div className="filter">
      {[
        "ALL",
        "APPETIZER",
        "CLASSIC ROLLS",
        "VEGETERIAN ROLLS",
        "COMBO",
        "NOODLES",
      ].map((category, index) => (

        <Filter category={category} key={index} />
      ))}
    </div>
  );
};

export default AllCategories;
