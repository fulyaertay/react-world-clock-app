import React,{useEffect} from 'react'

export default function cities() {
    //when dom is first loaded, call getCities() function
    useEffect(()=>{
        getCities();
    },[])
    const getCities=async()=>{
        //reach API
        const response=await fetch('http://worldtimeapi.org/timezones');
    }
  return (
    <div>cities</div>
  )
}
