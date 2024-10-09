function DynamicValue() {
  const myName = "Kisah Tegar Putra Abdi";
  const multiply = (a, b) => a * b;
  const specialClass = "anything-iwant";

  return (
    <section>
      <p>{2 + 2}</p>
      <h1>{myName}</h1>
      <p>My friends list: {["Anton", " Joni"]}</p>
      <p>2 * 2 = {multiply(2, 2)}</p>
      <p className={specialClass}>This is a special class</p>
    </section>
  );
}

export default DynamicValue;
