function InlineStyle() {
  const styles2 = { color: "white", backgroundColor: "grey", padding: "2rem" };
  return (
    <div>
      <h1 style={{ color: "white", backgroundColor: "teal", padding: "2rem" }}>
        Inline Style
      </h1>

      <h2 style={styles2}>This is different</h2>
    </div>
  );
}

export default InlineStyle;
