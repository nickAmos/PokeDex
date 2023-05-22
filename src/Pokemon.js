import { useEffect, useState } from "react";
import './Pokemon.css';

function Pokemon() {

    const [pokemon, setPokemon] = useState({
        name: '',
        type: '',
        secondType: ''
    });

    const [num, setNum] = useState(1);

    function generateNum() {
        const randomNumber = Math.floor(Math.random() * 1010);
        console.log(randomNumber);
        setNum(randomNumber);
    }

    

    useEffect(()=> {
        async function fetchData() {
            const url = 'https://pokeapi.co/api/v2/pokemon/'
            const endpoint = num
            const urlToFetch = `${url}${endpoint}`
            try {
              const response = await fetch(urlToFetch);
              const json = await response.json();
              if (json.types.length === 1) {
                const poke = {
                    name: json.name,
                    type: json.types[0].type.name,
                    image: json.sprites.front_default
                  }
                  setPokemon(poke);
              } else {
                const poke = {
                    name: json.name,
                    type: json.types[0].type.name,
                    typeTwo: json.types[1].type.name,
                    image: json.sprites.front_default
                  }
                  setPokemon(poke);
              }
            
              
              
            } catch (error) {
              console.error(error);
            }
          }
          fetchData();
        }, [num]);

    return (
        <div className="Container">
            <button className='button-54' onClick={generateNum}>Generate new pokemon</button>
            <div className="pokeInfo">
                <h1>{pokemon.name}</h1>
                <img src={pokemon.image} alt='pokemonSprite'/>
                <p>{pokemon.type} {pokemon.typeTwo}</p>
            </div>
        </div>
    )
    
}

export default Pokemon;