import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import { useParams } from "react-router-dom";
export default function Clock({ match }) {
  const [clock, setClock] = useState("");
  const [week, setWeek] = useState("");
  const [day, setDay] = useState("");
  const { region,place } = useParams();
  useEffect(() => {
    axios.get(
        `http://worldtimeapi.org/api/timezone/${region}/${place}`
      )
      .then((res) => {
        //console.log(res.data);
        setClock(res.data.datetime);
        setWeek(res.data.week_number);
        setDay(res.data.day_of_year);
      });
  }, [region,place]);


  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <Link
            to={"/"}
            className="btn-floating halfway-fab waves-light waves-effect left"
          >
            <i className="material-icons">undo</i>
          </Link>
          <h4 className="center teal-text darken-4 ">{place}</h4>
          <h1 className="center teal-text darken-3 ">
            {moment(clock).format("LLLL")}
          </h1>
          <h6 className="center brown-text">Week of {week}</h6>
          <h6 className="center brown-text">Day of {day}</h6>
        </div>
      </div>
    </div>
  );
}
