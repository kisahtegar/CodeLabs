const ProductList = () => {
  const products = [
    { id: 1, name: "Phone", price: "$2500" },
    { id: 2, name: "Laptop", price: "$10000" },
    { id: 3, name: "Headphone", price: "$5021" },
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <h1>Name: {p.name}</h1>
          <h1>Age: {p.price}</h1>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
