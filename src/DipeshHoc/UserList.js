import React from "react";
import CommonApiHoc from "./CommonApiHoc";

const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const UserList = ({responseData}) => {
  return (
    <div>
        <div className="container">
            <div className="row mt-4">
                {
                    responseData.map((item)=>{
                        return(
                        <div className="col-6 mt-4" key={item.id}>
                            <div className="card">
                                <div className="card-header">{item?.username}</div>
                                <div className="card-body">
                                <p className="card-text">
                                    {item?.email}
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

export default CommonApiHoc(UserList,{url:apiUrl,type:'Users'});
