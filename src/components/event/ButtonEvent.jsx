const ButtonEvent = () => {
  const handleClick = () => console.log(Math.round(Math.random() * 10));
  return <button onClick={handleClick}>CLick Me!</button>;
};

export default ButtonEvent;
