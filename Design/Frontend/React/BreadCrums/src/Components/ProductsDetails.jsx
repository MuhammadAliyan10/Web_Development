import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const { id } = useParams();
  const [sigleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const api = `https://dummyjson.com/products/${id}`;
      const data = await fetch(api);
      const jsonData = await data.json();
      setSingleProduct(jsonData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-item-center">
          {sigleProduct ? (
            <div className="col-sm-12 mb-4" key={sigleProduct.id}>
              <h2 className="text-center my-5">{sigleProduct.title}</h2>
              <div className="row">
                <div className="col-sm-6">
                  <div
                    className="card"
                    style={{ width: "auto", height: "auto" }}
                  >
                    <img
                      src={sigleProduct.thumbnail}
                      className="card-img-top"
                      alt="..."
                      style={{ width: "100%", height: "20rem" }}
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="card-body my-3">
                    <h5 className="card-title mb-2">
                      <span className="title">Name:</span> {sigleProduct.title}
                    </h5>
                    <p className="card-text">
                      <span className="title">Description:</span>{" "}
                      {sigleProduct.description}
                    </p>
                    <p className="card-text">
                      <span className="title">Price:</span> {sigleProduct.price}
                      $
                    </p>
                    <p className="card-text">
                      <span className="title">Rating:</span>{" "}
                      {sigleProduct.rating}
                    </p>
                    <p className="card-text">
                      <span className="title">Brand:</span> {sigleProduct.brand}
                    </p>
                    <button className="btn btn-secondary">Add to Card</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
