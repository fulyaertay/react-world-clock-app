import React,{useEffect} from 'react'

export default function Clock({match}) {
    useEffect(()=>{
        console.log(match);
    })
 
 
    return (
    <div>clock</div>
  )
}
