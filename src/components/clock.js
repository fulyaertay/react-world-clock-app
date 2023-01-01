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
            <div className='card-content'>
            <Link to={'/'} className="btn-floating halfway-fab waves-light waves-effect left">
                <i className='material-icons'>undo</i>
            </Link>
                <h4 className="center teal-text darken-4 ">{match.params.place}</h4>
                <h1 className="center teal-text darken-3 ">{clock}</h1>
            </div>
        </div>
    </div>
  )
}
