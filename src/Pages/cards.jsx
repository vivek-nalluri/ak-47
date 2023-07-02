import React from "react";
import "./cards.css";
import { Link } from "react-router-dom";
const Cards = (props) => {
  return (
    <center>
      <div className="card">
        <h5>{props?.id}</h5>
        <h5>{props?.name}</h5>
        <h5>{props?.username}</h5>
        <h5>{props?.mail}</h5>
        {props?.id && <Link to={`/user/${props.id}`}>Click</Link>}
      </div>
    </center>
  );
};

export default Cards;
