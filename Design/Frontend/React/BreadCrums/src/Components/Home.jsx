import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const api = "https://dummyjson.com/products";
      const data = await fetch(api);
      const jsonData = await data.json();
      const trendingProducts = jsonData.products.slice(0, 6);
      setData(trendingProducts);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="header">
        <div className="container">
          <h2 className="text-center my-5">Wellcome to YourStore</h2>
          <div className="row">
            {data.map((p) => {
              return (
                <div className="col-sm-4 mb-4" key={p.id}>
                  <div
                    className="card"
                    style={{ width: "18rem", height: "25rem" }}
                  >
                    <img
                      src={p.thumbnail}
                      className="card-img-top"
                      alt="..."
                      style={{ width: "100%", height: "10rem" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.title}</h5>
                      <p className="card-text">
                        {p.description.slice(0, 50)}...
                      </p>
                      <p className="card-text">{p.price}</p>
                      <Link
                        to={`/products/${p.id}`}
                        className="btn btn-secondary"
                      >
                        Buy It
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Link to={"/Products"} className="btn btn-secondary my-4">
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
