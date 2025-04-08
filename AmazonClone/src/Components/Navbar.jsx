import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#232f3e",
        gap: "30px",
        display: "flex",
        color: "white",
        padding: "10px",
        display:"flex",
        flexBasis:"0%",
        flexGrow:"1",
        flexWrap:"wrap",
        
        
      }}
    >
      <Link style={{ color: "white", textDecoration: "none",}} to="/H">
        <FiMenu /> All
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/Ho">
        Fresh
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/M">
        Products
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/B">
        Bestsellers
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/T">
        Today's Deals
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/O">
        Mobiles
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/P">
        Price
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/C">
        CustomerService
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/N">
        New Releases
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/E">
        Elactronic
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/FA">
        Fashion
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/A">
        AmazonPay
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/H">
        Home & Kitchen
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/C">
        Computers
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/B">
        Books
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/Member">
      Member
      </Link>
      
    </nav>
  );
};

export default Navbar;
