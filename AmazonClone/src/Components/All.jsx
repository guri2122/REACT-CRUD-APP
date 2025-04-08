import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { GiPriceTag } from "react-icons/gi";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdDescription } from "react-icons/md";
const All = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem("product")) || [];
    setProduct(storedProduct);
  }, []);

  return (
    <div style={{ display: "flex", flexBasis: "1px" }}>
      <h1 style={{ height: "30px", color: "black" }}>Products</h1>
      <div
        style={{
          color: "black",
          height: "300px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {product.length > 0 ? (
          product.map((product, index) => (
            <div
              key={index}
              style={{
                border: "solid white",
                width: "285px",
                height: "470px",
                margin: "20px", 
                justifyContent: "center",
              }}
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={product.productName}
                  style={{
                    height: "300px",
                    width: "280px",
                    display: "flex",
                    objectFit: "contain",
                  }}
                />
              )}

              <h2 className="text-lg font-semibold mt-2">
                {product.productName}
              </h2>
              <p
                style={{
                  color: "black",
                  font: "initial",
                  fontStyle: "oblique",
                  // border: "1px,solid, black",
                  // backgroundColor: "#cc0c39",
                }}
              >
                <MdOutlineDriveFileRenameOutline />
                {product.name}
              </p>
              <p
                style={{
                  color: "black",
                  font: "initial",
                  // border: "1px,solid, black",
                  backgroundColor: "",
                }}
              >
                {product.title}
              </p>
              <p
                style={{
                  color: "black",
                  font: "initial",
                  // border: "1px,solid, black",
                  // backgroundColor: "#c45500",
                }}
              >
                {" "}
                <MdDescription /> {product.description}
              </p>
              <p
                style={{
                  color: "white",
                  font: "revert",
                  border: "1px,solid, black",
                  backgroundColor: "black",
                }}
              >
                {" "}
                <GiPriceTag />
                {product.price}
              </p>

              <button
                style={{
                  width: "120px",
                  height: "30px",
                  backgroundColor: "#ffd814",
                  marginLeft: "80px",
                  paddingTop: "10px",
                  marginTop: "10px",
                  display: "flex",
                  borderRadius: "30px",
                  border: "none",
                  justifyContent: "center",
                  justifyItems: "center",
                }}
              >
                <CiShoppingCart style={{ margintop: "2px" }} /> Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products available. </p>
        )}
      </div>
    </div>
  );
};

export default All;
