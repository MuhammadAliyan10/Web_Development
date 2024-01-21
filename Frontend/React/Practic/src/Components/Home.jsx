import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [count, setConut] = useState(2);
  //count = 0

  const chageData = () => {
    setConut(count + 10);
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://dummyjson.com/quotes?limit=${count}`);
      const res = await data.json();
      setData(res.quotes);
    };
    fetchData();
  }, [chageData]);

  return (
    <div>
      <p>{count}</p>

      <button onClick={chageData}>Add One</button>
      {data.map((value) => {
        return (
          <>
            <ul key={value.id}>
              <li>
                {" "}
                <h2>{value.author}</h2>
              </li>
              <li>
                <p>{value.quote}</p>
              </li>
            </ul>
          </>
        );
      })}
    </div>
  );
};

export default Home;
