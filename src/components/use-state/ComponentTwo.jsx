const ComponentTwo = ({ count, onClickHandler }) => {
  const handleClick = () => onClickHandler();

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Decrement</button>
    </div>
  );
};

export default ComponentTwo;
