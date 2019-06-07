import React from "react";
import "./style.css";

const SingleCard = ({ children }) => {
  return (
    <div className="CardGroup">
      <div 
        className="card"
        // value={props.id}
        // onClick={() => props.handleClick(props.id)}
        >
          <div className="img-container">
            {/* <img className={(props.score === 0 && props.message !== "Click an image to begin!" ? "shake" : "")} alt={props.name} src={props.image} /> */}
          {children}
          </div>
        </div>
      </div>
      
  );
}


export default SingleCard;