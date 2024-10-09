import { useEffect, useState } from "react";

const SimpleUseEffect = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > 0) {
      console.log("Call useEffect()");
      document.title = `Incerement ${value}`;
    }
  }, [value]);

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
    </div>
  );
};

export default SimpleUseEffect;
