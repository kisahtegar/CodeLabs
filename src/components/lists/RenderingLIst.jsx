const RenderingLIst = () => {
  const users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Anton", age: 10 },
    { id: 3, name: "Blabla", age: 50 },
  ];

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
        </div>
      ))}
    </div>
  );
};

export default RenderingLIst;
