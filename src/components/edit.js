import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit(){
  const [fname,setFname] = useState("");
  const [brand,setBrand] = useState("");  
const navigate = useNavigate();
const { car1Id } = useParams();
useEffect(() => {
  axios.get(`http://localhost:8080/api/getOne/${car1Id}`).then((resp) => {
    console.log("resp is", resp.data);
    setFname(resp.data.name);
    setBrand(resp.data.brand);
  
  });
}, [car1Id]);

  const submitFunc =(e)=>{
   e.preventDefault();
   console.log("fname:", fname, "brand:", brand);
  
 
  axios
  .put(`http://localhost:8080/api/update/${car1Id}`,{
name:fname,
brand:brand
  } ) 
  .then((resp)=>{
    console.log("resp is",resp.data);
    navigate("/");
  });
};
  
  return(
       <div className="container">
        <h2>Edit page</h2>
           <form onSubmit={(e)=> submitFunc(e)}>
               <label htmlFor="fname">fname:</label>
               <input type="text" id="Fname" value={fname} onChange={(e)=>setFname(e.target.value)} />
               <br />

               <label htmlFor="brand">brand:</label>
               <input type="Brand" id="Brand" value={brand} onChange={(e)=> setBrand(e.target.value)} />
               <br />

               <input type="submit" value="Edit" />


               
           </form>
       </div>
  )};
