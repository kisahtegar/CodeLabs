const UserStatusConditional = (props) => {
  if (props.loggedIn && props.isAdmin) {
    return <h1>Welcome admin</h1>;
  } else {
    return <h1>Welcome user</h1>;
  }
};

export default UserStatusConditional;

// For use this:

// <UserStatusConditional loggedIn={true} isAdmin={true} />
