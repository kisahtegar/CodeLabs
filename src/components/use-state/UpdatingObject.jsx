import { useState } from "react";

const UpdatingObject = () => {
  const [movie, setMovie] = useState({
    title: "Inception",
    ratings: 8,
  });

  //   const handleClick = () => {
  //     const copyMovie = {
  //       ...movie,
  //       ratings: 5,
  //     };
  //     setMovie(copyMovie);
  //   };

  const handleClick = () => setMovie({ ...movie, ratings: 5 });

  return (
    <div>
      <h1>Title: {movie.title}</h1>
      <p>Ratings: {movie.ratings}</p>
      <button onClick={handleClick}>Change Rating</button>
    </div>
  );
};

export default UpdatingObject;
