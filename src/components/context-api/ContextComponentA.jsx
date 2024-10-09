import { createContext } from "react";
import ContextComponentB from "./ContextComponentB";

export const DataComponent1 = createContext();
export const DataComponent2 = createContext();

const ContextComponentA = () => {
  const name = "Kisah";
  const age = 10;

  return (
    <div>
      <DataComponent1.Provider value={name}>
        <DataComponent2.Provider value={age}>
          <ContextComponentB />
        </DataComponent2.Provider>
      </DataComponent1.Provider>
    </div>
  );
};

export default ContextComponentA;
