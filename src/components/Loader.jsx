import { Audio } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <Audio height="80" width="80" color="black" ariaLabel="loading" />
    </div>
  );
}

export default Loader;
