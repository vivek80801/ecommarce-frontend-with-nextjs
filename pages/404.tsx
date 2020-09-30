
const Default: React.FC = (): JSX.Element => {
  return (
    <>
      <h1>Page not found</h1>
      <img src="./img/not-found.jpg" alt="page not found" style={imgStyle} />
    </>
  );
};

const imgStyle = {
  height: "78vh",
  width: "98.9vw",
};

export default Default;
