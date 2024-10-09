const MouseMoveEvent = () => {
  const moveHandler = () => {
    alert("stop move your mouse");
    console.log("Dont move!!");
  };

  return (
    <p onMouseMove={moveHandler}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
      quisquam doloribus temporibus nam quis animi omnis architecto aperiam
      sapiente, esse sunt impedit perferendis, aspernatur a earum neque,
      distinctio corrupti exercitationem.
    </p>
  );
};

export default MouseMoveEvent;
