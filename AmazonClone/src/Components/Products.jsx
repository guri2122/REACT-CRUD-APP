// import React, { useEffect, useState } from "react";

// const Products = () => {
//   const [name, setName] = useState("");
//   const [title, setTitle] = useState("");
//   const [discribtion, setDiscribtion] = useState("");
//   const [price, setPrice] = useState("");
//   const [editIndex, setEditIndex] = useState(null);
//   const [image, setImage] = useState(null);
//   const [Product, setProduct] = useState(() => {
//     const storedProduct = localStorage.getItem("product");
//     return storedProduct ? JSON.parse(storedProduct) : [];
//   });

//   useEffect(() => {
//     if(Product.length>0){
//       localStorage.setItem("product", JSON.stringify(Product));

//     }
//   }, [Product]);

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!name || !title || !discribtion || !price) {
//       alert();
//       return;
//     }
//     if (editIndex === null) {
//       setProduct([...Product, { name, title, discribtion, price, image }]);
//     } else {
//       const updatedProduct= [...Product];
//       updatedProduct[editIndex] = { name, title, discribtion, price, image };
//       setProduct(updatedProduct);
//       setEditIndex(null);
//     }
//     setName("");
//     setTitle("");
//     setDiscribtion("");
//     setPrice("");
//     setImage("");
//   }

//   function handleEdit(index) {

//     setName(Product[index].name);
//     setTitle(Product[index].title);
//     setDiscribtion(Product[index].discribtion);
//     setPrice(Product[index].price);
//     setEditIndex(index);
//     setImage(index);
//   }
//   function handleDelete(index) {
//     setProduct(Product.filter((_, i) => i !== index));
//   }

//   function handleImageUpload(e) {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();

//       reader.onloadend = () => {
//         setImage(reader.result);
//       };

//       reader.readAsDataURL(file);
//     }
//   }

//   return (
//     <div style={{display:"flex" }}>
//     <div style={{ textAlign: "center", display: "flex" }}>
//       <div>
//         <h2
//           style={{
//             border: "solid",
//             backgroundColor: "rgb(243, 226, 207)",
//             justifyContent: "center",
//             margin:"30px",
//             marginLeft:"300px",
//             display:"flex",
//             objectFit:"contain"
//           }}
//         >
//           Product details
//         </h2>{" "}
//         <br /> <br />
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             border: "solid",
//             backgroundcolor: "white",
//             marginLeft: "80px",
//             height: "500px",
//             borderRadius: "10px",
//             paddingTop: "30px",

//           }}
//         >
//           <label style={{ marginRight: "390px", padding: "20px" }}>
//             PRODUCT NAME
//           </label>
//           <input
//             style={{
//               // borderRadius: "",
//               textAlign: "center",
//               border: "2px solid black",
//               display: "flex",
//               margin: "10px",
//             }}
//             type="text"
//             // placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />{" "}
//           <br />
//           <br />
//           <label style={{ marginRight: "390px", padding: "20px" }}>
//             PRODUCT TITLE
//           </label>
//           <input
//             style={{
//               // borderRadius: "30px",
//               border: "2px solid black",
//               textAlign: "center",
//               display: "flex",
//               margin: "10px",
//             }}
//             type="text"
//             // placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />{" "}
//           <br />
//           <br />
//           <label style={{ marginRight: "330px", padding: "20px" }}>
//             {" "}
//             PRODUCT DISCRIBTION
//           </label>
//           <input
//             style={{
//               // borderRadius: "30px",
//               textAlign: "center",
//               border: "2px solid black",
//               display: "flex",
//               margin: "10px",
//             }}
//             type="text"
//             // placeholder="Discribtion"
//             value={discribtion}
//             onChange={(e) => setDiscribtion(e.target.value)}
//           />{" "}
//           <br />
//           <br />
//           <label style={{ marginRight: "390px", padding: "20px" }}>
//             PRODUCT PRICE
//           </label>

//           <input
//             style={{
//               // borderRadius: "30px",
//               textAlign: "center",
//               border: "2px solid black",
//               display: "flex",
//               margin: "10px",
//             }}
//             type="Number"
//             // placeholder="Price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />{" "}
//           <br />
//           <br />
//           <br />
//           <label htmlFor="" style={{marginBottom:"300px"}}>
//             {" "}
//             PRODUCT IMAGE <br />
//           </label>

//           <input
//             type="file"
//             accept="image*"
//             onChange={handleImageUpload}
//             style={{
//               width: "380px",
//               justifyContent: "left",
//               flexGrow: "2",
//               border: "solid",
//             marginBottom:"300px"
//             }}
//           />
//           <button type="submit">{editIndex === null ? "Add" : "Update"}</button>
//         </form>
//         <h3>its my Product</h3>
//         {Product.map((person, index) => (
//           <div
//             key={index}
//             style={{
//              border: "1px solid black",
//               margin: "10px",
//               padding: "10px",
//             }}
//           >
//             <p>Name:{person.name}</p>
//             <p>Title:{person.title}</p>
//             <p>Discribtion:{person.Discribtion}</p>
//             <p>Price:{person.price}</p>
//             {person.image && (
//               <img
//                 src={person.image}
//                 style={{
//                   height: "260px",
//                   width: "270px",
//                   display: "flex",
//                   marginRight: "40px",
//                   textDecorationColor:"blue"
//                 }}
//                 alt="upload"
//               ></img>
//             )}{" "}
//             <br /> <br />
//             <button
//               style={{
//                 backgroundColor: "WHITE",
//                 padding: "10px",
//                 margin: "20px",
//                 flexShrink: "1px",
//                 display: "flex",
//                 borderRadius: "10px",
//               }}
//               onClick={() => handleEdit(index)}
//             >
//               Edit
//             </button>{" "}
//             <br />
//             <button
//               style={{
//                 backgroundColor: "lightred",
//                 padding: "10px",
//                 borderRadius: "10px",
//               }}
//               onClick={() => handleDelete(index)}
//             >
//               Delete
//             </button>

//           </div>

//         ))}
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Products;

// import React, { useState, useRef, useEffect } from "react";

// const Products = () => {
//   const [productName, setProductName] = useState("");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [products, setProducts] = useState([]);
//   const [editProduct, setEditProduct] = useState(null);
//   const [image, setImage] = useState(null);
//   const fileInputRef = useRef(null);

//   useEffect(() => {
//     const storedProducts = JSON.parse(localStorage.getItem("products"));
//     if (storedProducts) {
//       setProducts(storedProducts);
//     }
//   }, []);

//   useEffect(() => {
//     if (products.length > 0) {
//       localStorage.setItem("products", JSON.stringify(products));
//     }
//   }, [products]);

//   const printData = (e) => {
//     e.preventDefault();
//     const newProduct = { productName, title, description, price, image };

//     if (editProduct !== null) {
//       let updatedProducts = [...products];
//       updatedProducts[editProduct] = newProduct;
//       setProducts(updatedProducts);
//       setEditProduct(null);
//     } else {
//       setProducts([...products, newProduct]);
//     }

//     setProductName("");
//     setTitle("");
//     setDescription("");
//     setPrice("");
//     setImage(null);

//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   const handleEdit = (index) => {
//     const product = products[index];
//     setProductName(product.productName);
//     setDescription(product.title);
//     setPrice(product.description);
//     setDelivery(product.price);
//     setImage(product.image);
//     setEditProduct(index);
//   };

//   const handleDelete = (index) => {
//     const updatedProducts = products.filter((_, i) => i !== index);
//     setProducts(updatedProducts);
//   };

//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <>
//     <div style={{display:"flex"}}>
//     <div style={{border:"2px solid lightgray", margin:"30px", justifyContent:"center",padding:"30px"}}>

//     <form className="p-2 w-fit border-2 border-black m-2" onSubmit={printData}>
//       <label>Product Name</label> <br />
//       <input className="border border-black rounded px-2 w-full mt-1 mb-3" type="text" value={productName} onChange={(e) => setProductName(e.target.value)} /> <br /> <br />

//       <label>Title</label> <br />
//       <input className="border border-black rounded px-2 w-full mt-1 mb-3" type="text" value={title} onChange={(e) => setTitle(e.target.value)} /> <br /><br />

//       <label>Description</label> <br />
//       <input className="border border-black rounded px-2 w-full mt-1 mb-3" type="text" value={description} onChange={(e) => setDescription(e.target.value)} /> <br /><br />

//       <label>price</label> <br />
//       <input  type="number" value={price} onChange={(e) => setPrice(e.target.value)} /> <br /> <br />

//       <label>Image</label> <br />
//       <input ref={fileInputRef} className="border border-black rounded px-2 w-full mt-1 mb-3" type="file" accept="image/*" onChange={handleUpload} /> <br /><br />

//       <button className="border-2 border-black py-2 px-10 rounded-full mt-4" type="submit">
//         {editProduct !== null ? "Update" : "Submit"}
//       </button>
//     </form>

//     <div className="w-fit p-5">
//       {products.length > 0 ? (
//         <table className="border border-black w-full text-center">
//           <thead>
//             <tr className="bg-gray-300">
//               <th className="border border-black px-3 py-2">Product Name</th>
//               <th className="border border-black px-3 py-2">title</th>
//               <th className="border border-black px-3 py-2">description</th>
//               <th className="border border-black px-3 py-2">price</th>
//               <th className="border border-black px-3 py-2">Image</th>
//               <th className="border border-black px-3 py-2">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {products.map((product, index) => (
//               <tr key={index} className="bg-amber-50">
//                 <td className="border border-black px-3 py-2">{product.productName}</td>
//                 <td className="border border-black px-3 py-2">{product.title}</td>
//                 <td className="border border-black px-3 py-2">{product.description}</td>
//                 <td className="border border-black px-3 py-2">{product.price}</td>
//                 <td className="border border-black px-3 py-2">
//                   {product.image && <img src={product.image} alt="img" className="h-16 w-16 object-cover mx-auto" />}
//                 </td>
//                 <td className="border border-black px-3 py-2">
//                   <button onClick={() => handleEdit(index)} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Edit</button>
//                   <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p className="text-gray-500">No products available.</p>
//       )}
//     </div>

//   </div>
//   </div>

//   </>

//   );
// };

// export default Products;

import React, { useEffect, useState } from "react";

const Product = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState([]);
  // const [editIndex, setEditIndex] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("product"));
    if (storedProducts) {
      setProduct(storedProducts);
    }
  }, []);

  useEffect(() => {
    if (product.length > 0) {
      localStorage.setItem("product", JSON.stringify(product));
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, title, description, price, image };

    if (editIndex !== null) {
      let updatedProducts = [...product];
      updatedProducts[editIndex] = newProduct;
      setProduct(updatedProducts);
      setProduct(null);
    } else {
      setProduct([...product, newProduct]);
    }

    setName("");
    setTitle("");
    setDescription("");
    setPrice("");
    setImage(null);
  };

  function handleEdit(index) {
    setName(product[index].name);
    setTitle(product[index].title);
    setDescription(product[index].description);
    setPrice(product[index].price);
    setImage(index);
  }
  function handleDelete(index) {
    setProduct(product.filter((_, i) => i !== index));
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <main style={{ padding: "150px 40px", display: "flex" }}>
      <div
        style={{
          backgroundColor: "white",
          // borderRadius: "15px",
          padding: "40px 20px",
          height: "500px",
          width: "500px",
          border: "1.5px solid black",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "20px",
              color: "blue",
            }}
          >
            <u> Add Products </u>
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <div style={{ flexBasis: "300px", flexGrow: "1", flexShrink: "0" }}>
              <label
                style={{
                  display: "flex",
                  fontSize: "1.1rem",
                  fontWeight: "normal",
                  marginBottom: "2px",
                }}
                htmlFor="productName"
              >
                Product Name
              </label>
              <input
                id="productName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  display: "flex",
                  width: "100%",
                  padding: "10px 10px",
                  borderRadius: "5px",
                  border: "1px solid rgb(179, 178, 178)",
                }}
              />
            </div>

            <div style={{ flexBasis: "300px", flexGrow: "1", flexShrink: "0" }}>
              <label
                htmlFor="title"
                style={{
                  display: "flex",
                  fontSize: "1.1rem",
                  fontWeight: "normal",
                  marginBottom: "2px",
                }}
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                  display: "flex",
                  width: "100%",
                  padding: "10px 10px",
                  borderRadius: "5px",
                  border: "1px solid rgb(179, 178, 178)",
                }}
              />
            </div>
            <div style={{ flexBasis: "300px", flexGrow: "1", flexShrink: "0" }}>
              <label
                htmlFor="description"
                style={{
                  display: "flex",
                  fontSize: "1.1rem",
                  fontWeight: "normal",
                  marginBottom: "2px",
                }}
              >
                Description
              </label>
              <input
                id="description"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                style={{
                  display: "flex",
                  width: "100%",
                  padding: "10px 10px",
                  borderRadius: "5px",
                  border: "1px solid rgb(179, 178, 178)",
                }}
              />
            </div>
            <div style={{ flexBasis: "300px", flexGrow: "1", flexShrink: "0",  }}>
              <label
                htmlFor="price"
                style={{
                  display: "flex",
                  fontSize: "1.1rem",
                  fontWeight: "normal",
                  marginBottom: "2px",                  
                }}
              >
                Price
              </label>
              <input
                id="price"
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                style={{
                  display: "flex",
                  width: "100%",
                  padding: "10px 10px",
                  borderRadius: "5px",
                  border: "1px solid rgb(179, 178, 178)",
                }}
              />
            </div>
            <div
              style={{
                minWidth: "100%",
                flexBasis: "300px",
                flexGrow: "1",
                flexShrink: "0",
              }}
            >
              <label
                htmlFor="image"
                style={{
                  display: "flex",
                  fontSize: "1.1rem",
                  fontWeight: "normal",
                  marginBottom: "2px",
                }}
              >
                Product Image
              </label>
              <input
                onChange={handleImageUpload}
                id="image"
                type="file"
                accept="images/*"
                style={{
                  display: "flex",
                  width: "100%",
                  padding: "10px 10px",
                  borderRadius: "5px",
                  border: "1px solid rgb(179, 178, 178)",
                }}
              />
            </div>
            <div
              style={{
                minWidth: "100%",
                flexBasis: "300px",
                flexGrow: "1",
                flexShrink: "0",
              }}
            >
              <button
                onClick={handleSubmit}
                type="submit"
                style={{
                  display: "flex",
                  width: "70px",
                  padding: "10px 10px",
                  borderRadius: "5px",
                  border: "1px solid rgb(179, 178, 178)",
                  backgroundColor: "yellow",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div style={{ marginLeft: "130px" }}>
        <div>
          {product.length > 0 ? (
            <table
              style={{
                border: "1px solid black",
                borderRadius: "20px",
                padding: "10px",
                height:"100%"
              }}
            >
              <thead>
                <tr>
          
                  <th style={{ padding: "20px" }}>Product Name</th>
                  <th style={{ padding: "20px" }}>Title</th>
                  <th style={{ padding: "20px" }}>description</th>
                  <th style={{ padding: "20px" }}>Price</th>
                  <th style={{ padding: "20px" }}>Image</th>
                  <th style={{ padding: "20px" }}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {product.map((product, index) => (
                  <tr key={index}>
        
                    <td style={{ padding: "20px" }}>{product.name}</td>
                    <td style={{ padding: "20px" }}>{product.title}</td>
                    <td style={{ padding: "20px" }}>{product.description}</td>
                    <td style={{ padding: "20px" }}>{product.price}</td>
                    <td>
                      {product.image && (
                        <img
                          style={{
                            objectFit: "contain ",
                            border: "1px solid black",
                            borderRadius: "8px",
                            height: "100px",
                            width: "100px",
                          }}
                          src={product.image}
                          alt="img"
                        />
                      )}
                    </td>
                    <td style={{ padding: "20px", display:"flex" }}>
                      <button
                        style={{
                          border: "none",
                          padding: "8px ",
                          borderRadius: "5px",
                          backgroundColor: "blue ",
                          color: "white",
                          marginRight: "3px",
                          display:"flex"
                        }}
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        style={{
                          border: "none",
                          padding: "8px ",
                          borderRadius: "5px",
                          backgroundColor: "purple",
                          color: "white",
                          marginRight: "3px",
                          display:"flex"
                        }}
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Product;
