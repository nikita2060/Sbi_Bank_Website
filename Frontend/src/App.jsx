import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [colleges, setColleges] = useState([]);
  useEffect(()=>{
    axios.get('/api/colleges')
    .then((response)=>{
      setColleges(response.data)
    })
    .catch((error)=>{
      console.log(error)
    });
  },[])
  // const colleges = [
  //   {
  //     id: 1,
  //     rank: 1,
  //     name: "Indian Institute of Technology (IIT) Madras",
  //     fees: "₹ 2-2.5 Lakhs per year",
  //     placement_status: "80-90% placement rate, average package ₹ 15-20 LPA"
  //   },
  //   {
  //     id: 2,
  //     rank: 2,
  //     name: "Indian Institute of Technology (IIT) Delhi",
  //     fees: "₹ 2-2.5 Lakhs per year",
  //     placement_status: "85-90% placement rate, average package ₹ 15-20 LPA"
  //   },
  // ];

  return (
    <>
      <h1>Your dream college is here!!</h1>
      <p>Top Colleges : {colleges.length}</p>
      {
        colleges.map((college, index) =>(
          <div key ={college.id}>
            <h3>{college.rank}</h3>
            <h3>{college.name}</h3>
            <h3>{college.fees}</h3>
            <h3>{college.placement_status}</h3>



          </div>
        
        
        ))
      }
    
    </>
  )
}

export default App
