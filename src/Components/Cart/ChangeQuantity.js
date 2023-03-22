const ChangeQuantity = ({ quantity, setQuantity }) => {
  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const removeQuantity = () => {
    if (quantity <= 1) return;
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };
  return (
    <div>
      <button className="btn-quantity" onClick={addQuantity}>
        +
      </button>
      <span className="size-quantity">{quantity}</span>
      <button className="btn-quantity" onClick={removeQuantity}>
        -
      </button>
    </div>
  );
};

export default ChangeQuantity;
