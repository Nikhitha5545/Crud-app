import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Home(){
    const [data, setData] = useState([]);
   const navigate = useNavigate();
   useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((resp) => {
      console.log(resp.data.data);
      setData(resp.data.data);
    });
  }, []);
return(
    <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h3>Home page</h3>
      </div>
      <table className="table table-bordered table-striped text-center" border="1">
<thead>
          <tr>
            <th>First Name</th>
            <th>Email</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.first_name} {item.last_name}</td>
              <td>{item.email}</td>
              <td>
                <button className="btn btn-primary" onClick={() => navigate(`/detail/${item.id}`)}>Details</button>
              </td>
            </tr>
          ))}
        </tbody> 
      </table>
    </div>
    </div>
)
};

