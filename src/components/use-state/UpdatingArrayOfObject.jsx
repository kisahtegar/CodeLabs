import { useState } from "react";

const UpdatingOfObject = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      ratings: 8,
    },
    {
      id: 2,
      title: "The Matrix",
      ratings: 8.5,
    },
  ]);

  const handleClick = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...movies, title: "John Wick" } : m))
    );
  };

  // const handleClick = () => setMovie({ ...movie, ratings: 5 });

  return (
    <div>
      {movies.map((m) => (
        <li key={Math.random()}>{m.title}</li>
      ))}

      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default UpdatingOfObject;
