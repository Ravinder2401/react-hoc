import React, { useEffect, useState } from "react";
import CommonApiHoc from "./CommonApiHoc";

const apiUrl = 'https://fakestoreapi.com/products/';
const TodoList = ({responseData}) => {
//   const [products, setProducts] = useState([]);
  const [search,setSearch] = useState('');

//   useEffect(()=> {
//       const fetchData = async() => {
//           const response = await fetch('https://fakestoreapi.com/products/');
//           const data = await response.json();
//           setProducts(data.slice(10));
//         }
//         fetchData();
//   },[])

//   const filteredProducts = responseData.filter((product) =>
//     product.title.toLowerCase().includes(search.toLowerCase())
//   );
  return (
    <div>
        <div className="container">
            {/* <div className="container-fluid m-4">
                <h5>Products data list</h5>
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
            </div> */}
            <div className="row mt-4 mb-4">
                {
                    responseData.map((item)=>{
                        return(
                        <div className="col-6 mt-4" key={item.id}>
                            <div className="card">
                                <div className="card-header">{item?.title.substr(0,40)}</div>
                                <div className="card-body">
                                <p className="card-text">
                                    {item?.description.substr(0,100)}
                                </p>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>         
        </div>
    </div>
  );
};

export default CommonApiHoc(TodoList,{url:apiUrl,type:'Products'});
