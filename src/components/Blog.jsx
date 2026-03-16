import React, { useEffect, useState } from "react";
// import "../asset/css/Blog.css";

import Skeleton from "@mui/material/Skeleton";
import HeadingDescription from "./HeadingDescription";

export default function Blog(props) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Something went wrong!");
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <HeadingDescription one={props.one} onemain={props.onemain}/>

      <div className="container">
        <div className="products-page">
          <div className="products-grid">

            {/* ERROR MESSAGE */}
            {error && (
              <div style={{ textAlign: "center", padding: "20px" }}>
                {error}
              </div>
            )}

            {/* SKELETON */}
            {loading &&
              Array.from(new Array(8)).map((_, index) => (
                <div className="product-card" key={index}>
                  <Skeleton
                    variant="rectangular"
                    height={200}
                    animation="wave"
                  />
                  <div className="product-info">
                    <Skeleton variant="text" height={30} animation="wave" />
                    <Skeleton variant="text" width="60%" animation="wave" />
                    <Skeleton variant="text" width="40%" animation="wave" />
                    <Skeleton variant="text" width="80%" animation="wave" />
                    <Skeleton variant="text" width="50%" animation="wave" />
                  </div>
                </div>
              ))}

            {/* PRODUCT CARDS */}
            {!loading &&
              !error &&
              products.map((item) => (
                <div className="product-card" key={item.id}>
                  <img src={item.image} alt={item.title} />

                  <div className="product-info">
                    <h3>{item.title}</h3>

                    <div className="rating">
                      ⭐ {item.rating?.rate ?? 0}
                      <span>({item.rating?.count ?? 0})</span>
                    </div>

                    <div className="price-row">
                      <span className="price">₹{item.price}</span>
                    </div>

                    <span
                      className="assured read-more"
                      onClick={() => setSelectedProduct(item)}
                      style={{ cursor: "pointer" }}
                    >
                      {item.description.slice(0, 70)}...
                    </span>

                    <span className="category">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* MODAL */}
        {selectedProduct && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="modal-content modal-center"
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className="close-btn"
                onClick={() => setSelectedProduct(null)}
                style={{ cursor: "pointer" }}
              >
                ✕
              </span>

              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
              />

              <h2>{selectedProduct.title}</h2>

              <div className="rating">
                ⭐ {selectedProduct.rating?.rate ?? 0} (
                {selectedProduct.rating?.count ?? 0})
              </div>

              <h3>₹{selectedProduct.price}</h3>

              <p>{selectedProduct.description}</p>

              <span className="category">
                {selectedProduct.category}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}