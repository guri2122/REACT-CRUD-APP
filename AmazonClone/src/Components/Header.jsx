import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { MdArrowDropDown } from "react-icons/md";
import "./AmazoneHeader.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header >
      
      <div className="header">
        <Link to={"/free"}></Link>
        <div className="amazon">
          <img src="./image.png" alt="" />
          <div className="location">
            <SlLocationPin className="icon" />
            <Link to={"/Location"} style={{textDecoration:"none"}}>
            <h1 style={{textDecoration:"none"}}>
            
              Delivering to Chandigarh 140603 <br /> <p>update loaction</p>
            </h1>
            </Link>
          </div>
        </div>
        <div className="search-bar">
          <select className="search-dropdown">
            <option>All</option>
            <option>All categoris</option>
            <option>Alexa skills</option>
            <option>Amazon devices</option>
            <option>Amazon fashion</option>
            <option>Amazon fresh</option>
            <option>Amazon pharmacy</option>
            <option>Appliance</option>
            <option>Apps&games</option>
            <option>Baby</option>
            <option>Beauty</option>
            <option>Books</option>
            <option>Car & MoterBike</option>
            <option>Clothes</option>
            <option>Collectables</option>
            <option>Computer & Accessories</option>
            <option>Deals</option>
            <option>Elactronics</option>
            <option>Furniture</option>
            <option>Gardans & Outdoors</option>
            <option>Gift Cards</option>
            <option>Grocery & Gourmet Foods</option>
            <option>Health and personal Care</option>
            <option>Home & kitchen</option>
            <option>Industrial & Scientific</option>
            <option>Jewellery</option>
            <option>Kindle store</option>
            <option>Luggage & Bags</option>
            <option>Luxury Beauty</option>
            <option>Movies & TV Shows </option>
            <option>MP 3 Music</option>
            <option>Music</option>
            <option>Musical Instrument</option>
            <option>Office Product </option>
            <option>Pet Supplies</option>
            <option>Prime Video</option>
            <option>Shoes & Handbags</option>
            <option>Software</option>
            <option>Sports,fitness & Outdoors</option>
            <option>Subcribe & Save</option>
            <option>Tool & Home Improvment</option>
            <option>Toys & Games</option>
            <option>Under 500</option>
            <option>Videos Games</option>
            <option>Watches</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="search-input"
          />
          <button className="search-button">
            <FaSearch className="search-icon" />
          </button>
        </div>

        <div className="india">
          <img className="photo" src="./flag.png" height={"20px"} />
          <select
            style={{
              backgroundColor: "#131921",
              color: "white",
              border: "none",
            
            }}
          > 
          
            <option className="option" >
              EN 
            </option>
            <option>Hindi</option>
            <option>Marathi</option>
            <option>Punjabi</option>
            <option>urdu</option>
            you are shoping in Amazon.in
          </select>
        </div>

        <div className="right-section">
          <Link to={"/Signup"} style={{color:"white" ,textDecoration:"none"}}>
            <h3>
              Hello, sign in <br /> Account & Lists <MdArrowDropDown />
            </h3>
          </Link>
          
          <div className="orders">
            <Link to={"/Sign"} style={{color:"white" , textDecoration:"none"}}>
            <span>Returns</span> <br />
            <span className="bold">& Orders</span>
            </Link>
          </div>
          
          <div className="cart">
            <FaShoppingCart className="cart-icon" />
            <span className="bold">Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
