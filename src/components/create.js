import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Create(){
  const [fname,setFname] = useState("");
  const [brand,setBrand] = useState("");
const navigate = useNavigate();

  const submitFunc =(e)=>{
   e.preventDefault();
   console.log("fname:", fname, "brand:", brand);
  
 
  axios
  .post("http://localhost:8080/api/post",{
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
           <form onSubmit={(e)=> submitFunc(e)}>
               <label htmlFor="fname">fname:</label>
               <input type="text" id="Fname" value={fname} onChange={(e)=>setFname(e.target.value)} />
               <br />

               <label htmlFor="brand">brand:</label>
               <input type="Brand" id="Brand" value={brand} onChange={(e)=> setBrand(e.target.value)} />
               <br />
               <br/>
               <input type="submit" value="submit" />


               
           </form>
       </div>
  )};
