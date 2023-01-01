import React,{useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
export default function Clock({match}) {
    const [clock,setClock]=useState('');
    useEffect(()=>{
        getClock();
    },[])
    const getClock=()=>{
        axios.get(`http://worldtimeapi.org/api/timezone/${match.params.region}/${match.params.place}`)
        .then(res=>{
            //console.log(res.data);
            setClock(res.data.datetime);
        })
    }
 
    return (
    <div className="container">
        <div className="card">
            <Link to={'/'} className="btn-floating"><i className='material-icons'>undo</i></Link>
        </div>
    </div>
  )
}
