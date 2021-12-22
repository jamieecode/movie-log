import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <Loader
      type="Bars"
      color="#00BFFF"
      height={80}
      width={80}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    />
  );
};

export default Spinner;
