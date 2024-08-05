import React from "react";
import "./Loader.css";
import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
  return (
    <div className="loader">
      <HashLoader color="red" />
      <span className="loader_text">Loading</span>
    </div>
  );
};

export default Loader;
