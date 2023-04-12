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
      ].map((category, id) => (
        <Filter category={category} key={id} />
      ))}
    </div>
  );
};

export default AllCategories;
