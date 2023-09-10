import React ,{useState,useEffect} from "react";
import CardsGrid from "./CardsGrid/CardsGrid";
import Alien_X from "../assets/Alien_X.jpg"
import Cannonbolt from "../assets/Cannonbolt.jpg"
import diamondhead from "../assets/diamondhead.jpg"
import fourArms from "../assets/fourArms.jpg"
import ghostfreak from "../assets/ghostfreak.jpg"
import heatBlast from "../assets/heatBlast.jpg"
import Way_big from "../assets/Way_big.jpg"
import wildMud from "../assets/wildMud.jpg"
import XLR8 from "../assets/XLR8.jpg"
import Upgrade from "../assets/Upgrade.jpg"


function Main(){
    const HEROES={
        'Alien X':Alien_X,
        'Cannon Bolt':Cannonbolt,
        'Diamond Head':diamondhead,
        XLR8:XLR8,
        'Heat Blast':heatBlast,
        'Way Big':Way_big,
        Upgrade:Upgrade,
        fourArms:fourArms,
        wildMud:wildMud,
    }
    const[heroesNames,setHeroesNames]=useState(Object.keys(HEROES))
    const[clickedHeroes,setClickedHeroes]=useState([])
    const[currentSc,setCurrentSc]=useState(0);
    const[bestSc,setBestSc]=useState(0);

    const shuffleCards=()=>{
        const shuffleCards=[...heroesNames]

        for(let i=shuffleCards.length-1;i>=0;i--){
            let randomIdx=Math.floor(Math.random()*i+1)
            let temp=shuffleCards[randomIdx];
            shuffleCards[randomIdx]=shuffleCards[i];
            shuffleCards[i]=temp;
        }

        setHeroesNames(shuffleCards);
    }

    const handleCardClick=hero=>{
        if(clickedHeroes.includes(hero)){
            resetScore();
        }
        else{
            updateScore()
            setClickedHeroes([...clickedHeroes,hero])
        }
    }
    const updateScore=()=>{
        setCurrentSc(currentSc+1);
        if(currentSc>=bestSc)
        {
            setBestSc(currentSc+1)
        }
    }
    const resetScore=()=>{
        setCurrentSc(0);
        setClickedHeroes([]);
    }

    useEffect(shuffleCards,[currentSc])

    return(
        <main className="main">
            <div className="score">
                <div className="currentSc">Current Score:{currentSc}</div>
                <div className="bestSc">Best Score:{bestSc}</div>
            </div>
            <CardsGrid heroes={HEROES} heroesNames={heroesNames} handleCardClick={handleCardClick} />
        </main>
    )
}
export default Main