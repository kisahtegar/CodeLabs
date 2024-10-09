const CopyEvent = () => {
  const copyHandler = () => {
    console.log("Stop stealing my content!");
  };

  return (
    <p onCopy={copyHandler}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
      quisquam doloribus temporibus nam quis animi omnis architecto aperiam
      sapiente, esse sunt impedit perferendis, aspernatur a earum neque,
      distinctio corrupti exercitationem.
    </p>
  );
};

export default CopyEvent;
