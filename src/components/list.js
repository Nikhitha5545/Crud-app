import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function List(){
    const [product, setProduct] = useState([]);
   const navigate = useNavigate();
  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axios.get("http://localhost:8080/api/getAll").then((resp) => {
      console.log("resp is", resp.data);
      setProduct(resp.data);
    });
  };
  const deleteFunc = (id) => {
    axios.delete(`http://localhost:8080/api/delete/${id}`).then((resp) => {
      getList();
      alert(resp);
    });
    // updated list after deletion
  };
return(
    <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h3>List Of Cars Names And Brands</h3>
      <button className="btn btn-success float-right lg-3" onClick={()=> navigate("/create")}>CREATE</button>
      </div>
      <table className="table table-bordered table-striped text-center" border="1">
<thead>
          <tr>
            <th>Sl no.</th>
            <th>Name</th>
            <th>Brand</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item,index) => (
            <tr key={item._id}>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.brand}</td>
              <td>
                <button className="btn btn-primary" onClick={() => navigate(`/edit/${item._id}`)}>Edit</button>
              </td>
              <td>
                <button className="btn btn-secondary" onClick={() => deleteFunc(item._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody> 
      </table>
    </div>
    </div>
)
};