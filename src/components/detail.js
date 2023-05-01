import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Detail(){
    const [data, setData] = useState([]);
    const { dataId } = useParams();

    //useEffect is used to call the API
    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${dataId}`).then((resp) => {
          console.log(resp.data);
          setData(resp.data.data);
        });
      }, [dataId]);
      

    return (
        <div className="container">
          <h1>Image of a Person </h1>
          <p>{data.id}.<img src={data.avatar}/> </p>
        
       </div>
    )
};

// import React from "react";

// export default function Detail(){
//     return(
//         <div>Detail page</div>
//     )
// };