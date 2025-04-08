import React from "react";
import "./Free.css";

const Fre = () => {
  return (
    <div className="fresh-container">
      <nav className="navbar">
        <span className="logo">fresh</span>
        <ul className="nav-links">
          <li>Past Purchases</li>
          <li>Alexa Lists</li>
          <li>Deals</li>
          <li>Fruits & Vegetables</li>
          <li>Atta, Rice and Grains</li>
          <li>Oil and Ghee</li>
          <li>Milk and Dairy</li>
          <li>Snacks & Biscuits</li>
          <li>Eggs, Meat & Fish</li>
          <li>Bath & Body</li>
          <li>Laundry Detergents</li>
          <li>Baby Care</li>
        </ul>
      </nav>
      <div className="delivery-box">
        <strong>Delivery ▼</strong>
        <p>As fast as 4 hours</p>
        <p className="login-text">Login to check slots</p>
      </div>
      <div className="savings-section">
        <h2>
          Everyday Savings, <span className="green-text">Fresh Groceries</span>
        </h2>
        <div className="savings-cards">
          <div className="card">
            <div className="icon">💵</div>
            <p>Flat ₹100 Cashback</p>
            <span>Exclusive offer</span>
          </div>
          <div className="card">
            <div className="icon">%</div>
            <p>Up to 40% discount on MRP</p>
          </div>
          <div className="card">
            <div className="icon">✔️</div>
            <p>No Hidden Charges</p>
            <span>Surge charge, handling & convenience fee</span>
          </div>
        </div>

        <div className="features">
          <span>✅  Wide Selection</span>
          <span>✔️ 4-step quality check on fruits & vegetables</span>
          <span>🚚 2-4 hour delivery slots</span>
        </div>
        
      </div>
      <img src="ssss.png" alt="image"  style={{
        width:"100%",
        height:"600px"
      }}/>
    </div> 
    
  );
};

export default Fre;

 