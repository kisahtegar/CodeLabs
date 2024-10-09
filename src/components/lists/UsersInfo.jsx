function UsersInfo() {
  const usersInfo = [
    {
      username: "Kisah",
      email: "kisah@example.com",
      location: "USA",
    },
    {
      username: "Joni",
      email: "joni@example.com",
      location: "Indonesia",
    },
    {
      username: "Anton",
      email: "anton@example.com",
      location: "Germany",
    },
  ];

  return (
    <main>
      {usersInfo.map((user) => (
        <ul key={Math.random()}>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </main>
  );
}

export default UsersInfo;
