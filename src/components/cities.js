import React,{useEffect,useState} from 'react'
import axios from 'axios';
export default function Cities() {
    const [cities,setCities]=useState([]);
    //when dom is first loaded, call getCities() function
    useEffect(()=>{
        getCities();
    },[])
    // const getCities=async()=>{
    //     //reach API
    //     const response=await fetch('http://worldtimeapi.org/api/timezones');
    //    // console.log(response);
    //     const cities=await response.json();
    //     console.log(cities);
    // }   

    //fetch with axios packages
    const getCities=()=>{
        axios.get('http://worldtimeapi.org/api/timezones')
        .then(res=>{
            console.log(res.data);
            setCities(res.data);
        })

    }
  return (
    <div className='row'>
        {cities.map(s=>(
            <div className='col l3 m4 s6' key={s}>
                <div className='card blue-grey darken-1'>
                    <div className='card-content white-text'  >
                        <p>{s}</p>
                    </div>
                </div> 
            </div>
        ))}
    </div>
  )
}
