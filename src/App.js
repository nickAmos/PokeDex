
import './App.css';
import Pokemon from './Pokemon';
import { useEffect, useState } from "react";
import Results from './Results';


const counterAndMove = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '30vh',
  backgroundColor: 'rgb(54, 55, 68)',
  color: 'white',
  flexDirection: 'column'
}


function App() {

  const [pokemonOne, setPokemonOne] = useState();
  const [pokemonTwo, setPokemonTwo] = useState();
  const [pokemonThree, setPokemonThree] = useState();
  const [generation, setGeneration] = useState(false);
  const [count, setCount] = useState(0);


  
    
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
 



if (!generation) {
  
  return (
    <div className='Landing'>
      <button className='button-landing' onClick={generate}>Start Game</button>
    </div>
  )
}


if (generation && pokemonOne) {

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
    <div className='App-Container'>
      <Results poke='one' choosenMove={choosenMove} movepool={pokemonOne.movepool} setGeneration={setGeneration} setCount={setCount} count={count}/>
      <Results poke='Two' choosenMove={choosenMove} movepool={pokemonTwo.movepool} setGeneration={setGeneration} setCount={setCount} count={count}/>
      <Results poke='Three' choosenMove={choosenMove} movepool={pokemonThree.movepool} setGeneration={setGeneration} setCount={setCount} count={count} />
    </div>
    <div style={counterAndMove}>
      <h2>{choosenMove}</h2>
      <h2>count: {count}</h2>
    </div>
    
    
      
    </>
  );

}





}






export default App;




  /*
  Next session: 

  move the counter and choosen move section to the Results funcitonal 
  component, add a new render that shows up as green bar when correct mon
  is choosen and a red if it is incorrect.
  Aim of this is to hide the loading of the next move that occurs on each 
  generation. 
  */