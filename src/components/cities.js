import React,{useEffect} from 'react'
import axios from 'axios';
export default function Cities() {
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
        })

    }
  return (
    <div>cities</div>
  )
}
