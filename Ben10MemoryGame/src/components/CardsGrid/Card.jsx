import React from "react";

function Card({title,image,handleCardClick}){
    return(
        <div className="card" onClick={()=>{handleCardClick(title)
        console.log(title)}}>
            <div className="ctitle">{title}</div>
            <img src={image} alt=""className="img" />
        </div>
    );
}
export default Card