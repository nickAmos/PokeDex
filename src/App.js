
import './App.css';
import Pokemon from './Pokemon';
import { useEffect, useState } from "react";





function App() {

  const [pokemonOne, setPokemonOne] = useState();
  const [pokemonTwo, setPokemonTwo] = useState();
  const [pokemonThree, setPokemonThree] = useState();
  const [generation, setGeneration] = useState(0);


  
    
  function generate() {
    setGeneration(prev =>  prev + 1);
    
  };



  useEffect(()=> {

    
        const randomNumberOne = Math.floor(Math.random() * 1010);
        const randomNumberTwo = Math.floor(Math.random() * 1010);
        const randomNumberThree = Math.floor(Math.random() * 1010);
    
    
    let controller = new AbortController();
    async function fetchDataOne() {
        const url = 'https://pokeapi.co/api/v2/pokemon/'
        const endpoint = randomNumberOne
        const urlToFetch = `${url}${endpoint}`
        
        try {
          const response = await fetch(urlToFetch, {signal: controller.signal});
          const json = await response.json();
          let array = [];
      for (let i = 0; i < ((json.moves).length); i++) {
        array.push(json.moves[i].move.name);
    }

          if (json.types.length === 1) {
            const poke = {
                name: json.name,
                type: json.types[0].type.name,
                image: json.sprites.front_default,
                movepool: array
              }
              setPokemonOne(poke);
          } else {
            const poke = {
                name: json.name,
                type: json.types[0].type.name,
                typeTwo: json.types[1].type.name,
                image: json.sprites.front_default,
                movepool: array
              }
              setPokemonOne(poke);
          }
        
          
          
        } catch (error) {
          console.error(error);
        }
        
      }
      async function fetchDataTwo() {
        const url = 'https://pokeapi.co/api/v2/pokemon/'
        const endpoint = randomNumberTwo;
        const urlToFetch = `${url}${endpoint}`
        
        try {
          const response = await fetch(urlToFetch, {signal: controller.signal});
          const json = await response.json();
          let array = [];
      for (let i = 0; i < ((json.moves).length); i++) {
        array.push(json.moves[i].move.name);
    }

          if (json.types.length === 1) {
            const poke = {
                name: json.name,
                type: json.types[0].type.name,
                image: json.sprites.front_default,
                movepool: array
              }
              setPokemonTwo(poke);
          } else {
            const poke = {
                name: json.name,
                type: json.types[0].type.name,
                typeTwo: json.types[1].type.name,
                image: json.sprites.front_default,
                movepool: array
              }
              setPokemonTwo(poke);
          }
        
          
          
        } catch (error) {
          console.error(error);
        }
        
      }
      async function fetchDataThree() {
        const url = 'https://pokeapi.co/api/v2/pokemon/'
        const endpoint = randomNumberThree;
        const urlToFetch = `${url}${endpoint}`
        
        try {
          const response = await fetch(urlToFetch, {signal: controller.signal});
          const json = await response.json();
          let array = [];
      for (let i = 0; i < ((json.moves).length); i++) {
        array.push(json.moves[i].move.name);
    }

          if (json.types.length === 1) {
            const poke = {
                name: json.name,
                type: json.types[0].type.name,
                image: json.sprites.front_default,
                movepool: array
              }
              setPokemonThree(poke);
          } else {
            const poke = {
                name: json.name,
                type: json.types[0].type.name,
                typeTwo: json.types[1].type.name,
                image: json.sprites.front_default,
                movepool: array
              }
              setPokemonThree(poke);
          }
        
          
          
        } catch (error) {
          console.error(error);
        }
        
      }
      
      fetchDataOne();
      fetchDataTwo();
      fetchDataThree();
      return(() => {
        controller?.abort();
      })
      
}, [generation]);
 



if (!pokemonOne) {
  
  return (
    <>
    <button className='button-54' onClick={generate}>Generate new pokemon</button>
  <p>Before generorating Pokemon</p>
  </>
  )
}


if (pokemonOne && pokemonTwo && pokemonThree) {

  let movesArray = [...pokemonOne.movepool, ...pokemonTwo.movepool, ...pokemonThree.movepool];
  let noDuplicateArray = [...new Set(movesArray)];
  let choosenMove = (noDuplicateArray[Math.floor(Math.random() * noDuplicateArray.length)]);
  
  console.log(noDuplicateArray);

  return (
    <>
    
    <div className='App-Container'>
      <Pokemon className='Pokemon' name={pokemonOne.name} src={pokemonOne.image} typeOne={pokemonOne.type} typeTwo={pokemonOne.typeTwo} movepool={pokemonOne.movepool} choosenMove={choosenMove}  />   
      <Pokemon className='Pokemon' name={pokemonTwo.name} src={pokemonTwo.image} typeOne={pokemonTwo.type} typeTwo={pokemonTwo.typeTwo} movepool={pokemonTwo.movepool} choosenMove={choosenMove} /> 
      <Pokemon className='Pokemon' name={pokemonThree.name} src={pokemonThree.image} typeOne={pokemonThree.type} typeTwo={pokemonThree.typeTwo} movepool={pokemonThree.movepool} choosenMove={choosenMove} />
      
      
    </div>
    <button className='button-54' onClick={generate}>Refresh</button>
    <p>All moves found in these pokemon: </p> 
    <p>chosen move: {choosenMove}</p>
    
    
      
    </>
  );

}





}






export default App;

/*   let movesArray = [...pokemonOne.movepool, ...pokemonTwo.movepool, ...pokemonThree.movepool];
  let noDuplicateArray = [...new Set(movesArray)];
  let choosenMove = (noDuplicateArray[Math.floor(Math.random() * noDuplicateArray.length)]);
  console.log(choosenMove);
  let result = ''
  if (pokemonOne.movepool.includes(choosenMove)) {
    result = <p>{pokemonOne.name}</p>
  } else if (pokemonTwo.movepool.includes(choosenMove)) {
    result = <p>{pokemonTwo.name}</p>
  } else if (pokemonThree.movepool.includes(choosenMove)) {
    result = <p>{pokemonThree.name}</p>
  } else {
    console.log('no correct answer');
  } */