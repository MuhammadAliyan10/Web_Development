// ShowData.js
import React, { useContext } from "react";
import DataContext from "./DataContext";

const ShowData = () => {
  const { data, setData } = useContext(DataContext);

  return (
    <div>
      <h2>Hello {data}</h2>
      <button
        onClick={() => {
          setData("Noor");
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default ShowData;
