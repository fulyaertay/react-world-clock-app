import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Cities() {
  const [cities, setCities] = useState([]);
  const [tempCities, tempSetCities] = useState(null);
  //when dom is first loaded, call getCities() function
  useEffect(() => {
    getCities();
  }, []);
  // const getCities=async()=>{
  //     //reach API
  //     const response=await fetch('http://worldtimeapi.org/api/timezones');
  //    // console.log(response);
  //     const cities=await response.json();
  //     console.log(cities);
  // }

  //fetch with axios packages
  const getCities = () => {
    axios.get("http://worldtimeapi.org/api/timezones").then((res) => {
      console.log(res.data);
      setCities(res.data);
    });
  };
  const filterCities = (e) => {
    var input = e.target.value;
    tempSetCities((previousCities) => {
      return cities.filter((s) => {
        return s.toLowerCase().includes(input.toLowerCase());
      });
    });
  };
  return (
    <div>
      <div className="row container">
        <form className="col s12 m12 l12">
          <div className="input-field col12">
            <input
              id="city"
              className="input-field"
              type="text"
              onChange={filterCities}
            ></input>
            <label htmlFor="city" className="blue-grey-text">
              Search City..
            </label>
          </div>
        </form>
      </div>
      <div className="row">
        {tempCities != null
          ? tempCities.map((s) => (
              <Link key={s} to={`/${s}`}>
                <div className="col l3 m4 s6">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <p>{s}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          : cities.map((s) => (
              <Link key={s} to={`/${s}`}>
                <div className="col l3 m4 s6">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <p>{s}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}
