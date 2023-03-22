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
      ].map((category) => (
        <Filter category={category} />
      ))}
    </div>
  );
};

export default AllCategories;
