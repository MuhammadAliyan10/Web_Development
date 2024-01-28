import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async (index) => {
      const Api = "https://dummyjson.com/quotes?limit=100";
      const data = await fetch(Api);
      const res = await data.json();
      const finalData = await res.quotes;
      finalData[index].author;
      finalData[index].quote;
      setData(finalData(0));
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>
        {data.map((e) => {
          return (
            <>
              <h2>{e.quote}</h2>
              <h3>{e.author}</h3>
            </>
          );
        })}
      </h2>
    </div>
  );
};

export default Home;
