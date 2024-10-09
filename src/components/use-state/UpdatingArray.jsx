import { useState } from "react";

function UpdatingArray() {
  const [friends, setfriends] = useState(["Antoh", "John"]);

  const addOneFriend = () => setfriends([...friends, "KIsah Tegar"]);
  const removeOneFriend = () => setfriends(friends.filter((f) => f != "John"));
  const updateOneFriend = () => {
    setfriends(friends.map((f) => (f == "John" ? "John Smith" : f)));
  };

  return (
    <div>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={addOneFriend}>Adding one friend</button>
      <button onClick={removeOneFriend}>Remove one friend</button>
      <button onClick={updateOneFriend}>Update one friend</button>
    </div>
  );
}

export default UpdatingArray;
