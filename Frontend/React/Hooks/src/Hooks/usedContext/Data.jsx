import React, { useState } from "react";
import DataContext from "./DataContext";
import ShowData from "./ShowData";

const DataProvider = () => {
  const [data, setData] = useState("Aliyan");

  return (
    <DataContext.Provider value={{ data, setData }}>
      <h2>My name is {data}</h2>
      <ShowData />
    </DataContext.Provider>
  );
};
export default DataProvider;
