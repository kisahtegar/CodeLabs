const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({ isValid }) => {
  // if (isValid) {
  //   return <ValidPassword />;
  // }
  // return <InvalidPassword />;

  return isValid ? <ValidPassword /> : <InvalidPassword />;
};

export default Password;

// <div>
//     <Password isValid={false} />
// </div>
