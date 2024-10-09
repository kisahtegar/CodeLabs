import { useContext } from "react";
import { DataComponent1, DataComponent2 } from "./ContextComponentA";

const ContextComponentB = () => {
  const name = useContext(DataComponent1);
  const age = useContext(DataComponent2);

  return (
    <div>
      {/* <DataComponentA.Consumer>
        {(name) => {
          return <h1>{name}</h1>;
        }}
      </DataComponentA.Consumer> */}

      <h1>
        My name is: {name} and Im {age} years old
      </h1>
    </div>
  );
};

export default ContextComponentB;
