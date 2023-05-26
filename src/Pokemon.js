import { useState } from 'react';
import './Pokemon.css';
import './App.css';


function Pokemon(props) {

const [answer, setAnswer] = useState(props.reset);

console.log(props.movepool);




function correct() {
    if (props.movepool.includes(props.choosenMove)) {
        setAnswer(true);
        setTimeout(() => {
            setAnswer(false);
        }, 3000);
    }
    

}

if (answer) {
    return (
    <>
        <div className="Container" id='container' onClick={correct}>
            <div className="pokeInfo">
                <h1>CORRECT</h1>
                <p>{props.name} knows how to use {props.choosenMove}</p>
            </div>
        </div>
       
        </>
        )
}

if (!answer) {

    return (
        <>
        <div className="Container" id='container'>
            <button onClick={correct}>check</button>
            <div className="pokeInfo">
                <h1>{props.name}</h1>
                <img  src={props.src} alt='pokemonSprite'/>
                <p>{props.typeOne} {props.typeTwo}</p>
                

            </div>
        </div>
       
        </>
    )

}
    
}

export default Pokemon;