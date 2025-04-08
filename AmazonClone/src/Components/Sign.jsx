// import React from "react";

// const Sign = () => {
//   return (
//     <div>
//       <img
//         style={{ height: "100px", borderRadius: "6px", marginLeft: "45%", width:"100px" }}
//         src="./img.png"
//         alt="/image"
//       />
//       <div
//         style={{
//           border: "1px Solid Black",
//           height: "350px",
//           width: "350px",
//           marginLeft: "750px",
//           borderRadius: "8px",
//         }}
//       >
//         <h1 style={{ marginLeft: "20px", marginTop: "25px" , color:"black" }}>Sign in</h1>
//         <h1 style={{ marginLeft: "20px", marginTop: "10px", fontSize: "15px" ,color:"black" }}>
//           Email or mobile phone number
//         </h1>
//         <input
//           type="Email"
//           placeholder="Enter Your Email"
//           style={{
//             marginTop: "5px",
//             marginLeft: "20px",
//             width: "300px",
//             borderRadius: "5px",
//             padding: "8px ",
//           }}
//         />
//         <button
//           style={{
//             width: "300px",
//             marginLeft: "20px",
//             marginTop: "20px",
//             borderRadius: "50px",
//             border: "none",
//             backgroundColor: "#ffd814",
//             padding: "8px",
//           }}
//         >
//           Continue
//         </button>
//         <br />
//         <p style={{ marginLeft: "25px", marginTop: "15px", fontSize: "15px" ,color:"black"}}>
//           By continuing, you agree to Amazon's Conditions of Use and Privacy
//           Notice.
//         </p>
//         <p style={{ marginLeft: "20px", marginTop: "25px", fontSize: "15px" }}>
//           Buying for work?
//           <br />
//           <a
//             href="\"
//             style={{ fontSize: "15px", marginTop: "40px", color: "#007185" }}
//           >
//             Shop on Amazon Business
//           </a>
//         </p>
//       </div>
//       <button
//         style={{
//           marginLeft: "750px",
//           padding: "8px",
//           width: "350px",
//           marginTop: "20px",
//           fontSize: "15px",
//           borderRadius: "50px",
          
//         }}
//       >
//         {/* <Link to={"/Signup"}></Link> */}
//         Create your Amazon account{" "}
//       </button >
//     </div>
//   );
// };

// export default Sign;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = storedUsers.find(
      (user) => user.email === credentials.email && user.password === credentials.password
    );

    if (!foundUser) {
      setError("Invalid email or password!");
      return;
    }

    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser)); 

    if (foundUser.role === "admin") {
      navigate("/Members");
    } else {
      navigate("/Signup"); 
    }
  };

  return (
    <div style={{display:"flex", justifyContent:"center", justifyItems:"center",minHeight:"100%", backgroundColor:"", minWidth:"100%", padding:"40px"}}>
      <div style={{ border:"2px solid black", width:"500px", justifyContent:"center", justifyItems:"center" , height:"600px", padding:"40px"}} className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl">
        <div className="hidden lg:block lg:w-1/2">
          {/* <img style={{objectFit:"contain" , height:"200px"}} src="/Signin-logo.png" alt="Sign In" /> */}
        </div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img style={{height:"100px",width:"200px"}} src="Amazon.in-Logo.png" alt="Logo" />
          </div>

          <p style={{color:"blue",fontSize:"2rem"}}>Welcome back!</p> <br /> 
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">Email Address</label> <br /> 
            <input 
              type="email"
              style={{ border:"1px solid black", height:"20px", borderRadius:"10px"}}
              value={credentials.email} br
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
          </div> <br /><br />

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">Password</label> <br />
            <input
              type="password"
              style={{border:"1px solid black", height:"20px", borderRadius:"10px"}}
              value={credentials.password} 
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </div>
          <br />

          <div className="mt-6">
            <button
              onClick={handleLogin}
          style={{backgroundColor:"yellow", borderRadius:"10px", width:"100px"}}
            >
              Sign In
            </button>
          </div> <br />


          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>
            <p className="text-xs text-gray-500 uppercase hover:underline">
              <a style={{color:"blue" , textDecoration:"none" , justifyContent:"center"}}  href="/Signup"> or sign up</a>
            </p>
            <span className="w-1/5 border-b md:w-1/4"></span>
            
          </div>
          <p style={{  marginTop: "15px", fontSize: "15px" ,color:"black", justifyItems:"center"}}>
           By continuing, you agree to Amazon's Conditions of Use and Privacy
           Notice.
         </p>
         <p style={{ marginTop: "25px", fontSize: "15px", justifyItems:"center" }}>
          Buying for work?
           <br />
           <a
            href="\"
            style={{ fontSize: "15px", marginTop: "40px", color: "#007185", justifyItems:"center" }}
          >
            Shop on Amazon Business
          </a>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Sign;


