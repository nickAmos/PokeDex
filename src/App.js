
import './App.css';
import Pokemon from './Pokemon';
import { useEffect, useState } from "react";





function App() {

  const [pokemonOne, setPokemonOne] = useState(
);

const [pokemonTwo, setPokemonTwo] = useState();

const [pokemonThree, setPokemonThree] = useState();


const [numOne, setNumOne] = useState(0);
const [numTwo, setNumTwo] = useState(1);
const [numThree, setNumThree] = useState(1);



function generateNumbers() {
    const randomNumberOne = Math.floor(Math.random() * 1010);
    const randomNumberTwo = Math.floor(Math.random() * 1010);
    const randomNumberThree = Math.floor(Math.random() * 1010);
    
    setNumOne(randomNumberOne);
    setNumTwo(randomNumberTwo);
    setNumThree(randomNumberThree);
}



useEffect(()=> {
  let controller = new AbortController();
    async function fetchData() {
      
        const url = 'https://pokeapi.co/api/v2/pokemon/'
        const endpoint = numOne
        const urlToFetch = `${url}${endpoint}`
        try {
          const response = await fetch(urlToFetch, {signal: controller.signal});
          const json = await response.json();
          if (json.types.length === 1) {
            const poke = {
                name: json.name,
                type: json.types[0].type.name,
                image: json.sprites.front_default,
                movepool: json.moves
              }
              setPokemonOne(poke);
          } else {
            const poke = {
                name: json.name,
                type: json.types[0].type.name,
                typeTwo: json.types[1].type.name,
                image: json.sprites.front_default,
                movepool: json.moves
              }
              setPokemonOne(poke);
          }
        
          
          
        } catch (error) {
          console.error(error);
        }

        

        
      }
      fetchData();
      return(() => {
        controller?.abort();
      });
      
    }, [numOne]);

    useEffect(()=> {
      let controller = new AbortController();
      async function fetchData() {
        
          const url = 'https://pokeapi.co/api/v2/pokemon/'
          const endpoint = numTwo
          const urlToFetch = `${url}${endpoint}`
          try {
            const response = await fetch(urlToFetch, {signal: controller.signal});
            const json = await response.json();
            
            if (json.types.length === 1) {
              const poke = {
                  name: json.name,
                  type: json.types[0].type.name,
                  image: json.sprites.front_default,
                  movepool: json.moves
                }
                setPokemonTwo(poke);
            } else {
              const poke = {
                  name: json.name,
                  type: json.types[0].type.name,
                  typeTwo: json.types[1].type.name,
                  image: json.sprites.front_default,
                  movepool: json.moves
                }
                setPokemonTwo(poke);
            }
          
            
            
          } catch (error) {
            console.error(error);
          }
        
        }

        fetchData();
        return(() => {
          controller?.abort();
        });
        
      }, [numTwo]);

      useEffect(()=> {
        let controller = new AbortController();
        async function fetchData() {
            const url = 'https://pokeapi.co/api/v2/pokemon/'
            const endpoint = numThree
            const urlToFetch = `${url}${endpoint}`
            
            try {
              const response = await fetch(urlToFetch, {signal: controller.signal});
              const json = await response.json();

              if (json.types.length === 1) {
                const poke = {
                    name: json.name,
                    type: json.types[0].type.name,
                    image: json.sprites.front_default,
                    movepool: json.moves
                  }
                  setPokemonThree(poke);
              } else {
                const poke = {
                    name: json.name,
                    type: json.types[0].type.name,
                    typeTwo: json.types[1].type.name,
                    image: json.sprites.front_default,
                    movepool: json.moves
                  }
                  setPokemonThree(poke);
              }
            
              
              
            } catch (error) {
              console.error(error);
            }
            
          }
          fetchData();
          return(() => {
            controller?.abort();
          })
          
        }, [numThree]);
 
console.log(pokemonTwo);

if (numOne === 0) {
  
  return (
    <>
    <button className='button-54' onClick={generateNumbers}>Generate new pokemon</button>
  <p>Before generorating Pokemon</p>
  </>
  )
}

if (pokemonOne && pokemonTwo && pokemonThree) {
  let movesArray = []
  for (let i = 0; i < ((pokemonOne.movepool).length); i++) {
      movesArray.push(pokemonOne.movepool[i].move.name);
  }
  for (let i = 0; i < ((pokemonTwo.movepool).length); i++) {
    movesArray.push(pokemonTwo.movepool[i].move.name);
}
for (let i = 0; i < ((pokemonThree.movepool).length); i++) {
  movesArray.push(pokemonThree.movepool[i].move.name);
}


console.log(movesArray);
  
  return (
    <>
    
    <div className='App-Container'>
      <Pokemon className='Pokemon' name={pokemonOne.name} src={pokemonOne.image} typeOne={pokemonOne.type} typeTwo={pokemonOne.typeTwo} movepool={pokemonOne.movepool} />   
      <Pokemon className='Pokemon' name={pokemonTwo.name} src={pokemonTwo.image} typeOne={pokemonTwo.type} typeTwo={pokemonTwo.typeTwo} movepool={pokemonTwo.movepool}/> 
      <Pokemon className='Pokemon' name={pokemonThree.name} src={pokemonThree.image} typeOne={pokemonThree.type} typeTwo={pokemonThree.typeTwo} movepool={pokemonThree.movepool}/>
      
      
    </div>
    <button className='button-54' onClick={generateNumbers}>Refresh</button>
    <p>All moves found in these pokemon: </p> 
      <p>{movesArray}</p>
    </>
  );

}
}





export default App;

