import { useState } from 'react';
import './Pokemon.css';
import './App.css';



function Pokemon(props) {

const [answer, setAnswer] = useState(props.reset);


const font = {
    fontFamily: 'monospace',
    fontSize: '2rem',
    margin: '0'
    
}


function increment() {
    if (props.movepool.includes(props.choosenMove)) {
        props.setCount(prev => prev + 1);
        correct();
} else {
    props.setCount(0);
    incorrect();
}
    setTimeout(() => {
        props.setGeneration(prev => prev + 1);
    }, 2000)
}

function correct() {
    if (props.movepool.includes(props.choosenMove)) {
        setAnswer('correct');
        setTimeout(() => {
            setAnswer(false);
        }, 3000);
    }
    
}

function incorrect() {
    setAnswer('incorrect');
    setTimeout(() => {
        setAnswer(false);
    }, 3000);
}


if (answer === 'correct') {
    return (
    <>
        <div className="Container-correct">
                <h1>CORRECT</h1> 
        </div>
        </>
        )
}

if (answer === 'incorrect') {
    return (
        <>
            <div className="Container-incorrect">
                    <h1>Incorrect</h1> 
            </div>
            </>
            )
}

if (!answer) {

    return (
        <>
        <div className="Container" id='container'>
            <button className='selection-button' onClick={() => {increment()}}><p style={font}>{props.name}</p></button>
            <div className="pokeInfo">
                <img  src={props.src} alt='pokemonSprite'/>
                <p>{props.typeOne} {props.typeTwo}</p>
                

            </div>
        </div>
       
        </>
    )

}
    
}

export default Pokemon;