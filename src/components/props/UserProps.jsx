// const UserProps1 = (props) => {
//   console.log(props);

//   return (
//     <section>
//       <img src={props.img} alt={props.name} width={200} />
//       <h1>Name: {props.name}</h1>
//       <h1>Age: {props.age}</h1>
//       <h1>Is married: {props.isMarried}</h1>
//     </section>
//   );
// };

const UserProps = ({ img, name, age, isMarried, hobbies }) => {
  return (
    <section>
      <img src={img} alt={name} width={200} />
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Is married: {isMarried}</h1>
      <h1>Hobbies: {hobbies}</h1>
    </section>
  );
};

export default UserProps;

// Use like this :

// <div>
//     <UserProps
//         img="https::/blablabla"
//         name="Kisah"
//         age={22}
//         isMarried={false}
//         hobbies={["fishing", "coding", "sleeping"]}
//     />
// </div>s
