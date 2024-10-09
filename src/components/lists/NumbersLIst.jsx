function NumbersList() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <main>
      {numbers.map((number) => (
        <ul key={Math.random()}>
          <li>{number}</li>
        </ul>
      ))}
    </main>
  );
}

export default NumbersList;
