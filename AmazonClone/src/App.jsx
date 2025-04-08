import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import All from "./Components/All";
import Products from "./Components/Products";
import Fre from "./Components/Fre";
import Sign from "./Components/Sign";
import Home from "./pages/Home";
import Location from "./Components/Location";
import Signup from "./Components/Signup";
import Member from "./Components/Member";

const App = () => {
  return (
    <>
    <Header/>
<Navbar/>

      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/Sign" element={<Sign/>}/>
        <Route path="/H" element={<All/>}/>
        <Route path="/Ho" element={<Fre/>}/>
        <Route path="/M" element={<Products/>}/>
        <Route path="/Location" element={<Location/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Member" element={<Member/>}/>


        

      


      </Routes>
    </>
  );
};

export default App;
