import React, { useEffect, useState } from 'react'

const CommonApiHoc = (OriginalComponent,entity) => {
    const apiUrl = entity.url;
    console.log(apiUrl);
    const NewComponent = () => {
        const [data, setData] = useState([]);
        const [search,setSearch] = useState(''); // for search
        useEffect(()=> {
            const fetchData = async() => {
                const response = await fetch(`${apiUrl}`);
                const data = await response.json();
                setData(entity.type === 'Users' ? data : data.slice(10));
              }
              fetchData();
        },[])

        // for search/filter records
        const filteredData = data.filter((item) =>{
            if(entity.type === 'Users') {
                return item.username.toLowerCase().includes(search.toLowerCase())
            }
            if(entity.type === 'Products') {
                return item.title.toLowerCase().includes(search.toLowerCase())
            }
            return false;
        });
        return (
            <>
            <div className="container-fluid m-4">
                <h5>{entity.type} data list</h5>
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
            </div>
            <OriginalComponent responseData={filteredData}/>
            </>
        )
    }
  return NewComponent
}

export default CommonApiHoc