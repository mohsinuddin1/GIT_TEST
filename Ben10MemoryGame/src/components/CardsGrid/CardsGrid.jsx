import React from "react";
import Card from "./Card";

function CardsGrid({heroes,heroesNames,handleCardClick}){
    return(
        <div className="cards">
            {heroesNames.map((hero,index)=>{
                return <Card key={index} title={hero} image={heroes[hero]} handleCardClick={handleCardClick} />
            })}
        </div>
    )
}

export default CardsGrid