import React,{ useEffect, useState } from 'react'
import Papa from 'papaparse';

const Inputdata = () => {
  
  const [data,setData]=useState([]);

  const handleFileupload = (e)=>{
    const file = e.target.files[0];
    
    Papa.parse(file,{
        header:true,
        complete:(results)=>{
            setData(results.data);
        },
    });
  };

 


  return (
    <div>
        <input type="file" accept='.csv'  onChange={handleFileupload} />
        {data.length?(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Occupation</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row,index)=>(
                        <tr key={index}>
                            <td>{row.Name}</td>
                            <td>{row.Age}</td>
                            <td>{row.Occupation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ):null}
    </div>
   
  )
}

export default Inputdata