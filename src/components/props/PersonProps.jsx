const PersonProps = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
    </div>
  );
};

export default PersonProps;

// For use this:

// <div>
//   <Person name="Kisah" age={20} />
// </div>
