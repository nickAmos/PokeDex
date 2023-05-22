
import './App.css';
import Pokemon from './Pokemon';
import { useEffect, useState } from "react";





function App() {

  const [pokemonOne, setPokemonOne] = useState({
    name: '',
    type: '',
    secondType: ''
});

const [pokemonTwo, setPokemonTwo] = useState({
  name: '',
  type: '',
  secondType: ''
});

const [pokemonThree, setPokemonThree] = useState({
  name: '',
  type: '',
  secondType: ''
});


const [numOne, setNumOne] = useState(1);
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
    async function fetchData() {
        const url = 'https://pokeapi.co/api/v2/pokemon/'
        const endpoint = numOne
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
              setPokemonOne(poke);
          } else {
            const poke = {
                name: json.name,
                type: json.types[0].type.name,
                typeTwo: json.types[1].type.name,
                image: json.sprites.front_default
              }
              setPokemonOne(poke);
          }
        
          
          
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, [numOne]);

    useEffect(()=> {
      async function fetchData() {
          const url = 'https://pokeapi.co/api/v2/pokemon/'
          const endpoint = numTwo
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
                setPokemonTwo(poke);
            } else {
              const poke = {
                  name: json.name,
                  type: json.types[0].type.name,
                  typeTwo: json.types[1].type.name,
                  image: json.sprites.front_default
                }
                setPokemonTwo(poke);
            }
          
            
            
          } catch (error) {
            console.error(error);
          }
        }
        fetchData();
      }, [numTwo]);

      useEffect(()=> {
        async function fetchData() {
            const url = 'https://pokeapi.co/api/v2/pokemon/'
            const endpoint = numThree
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
                  setPokemonThree(poke);
              } else {
                const poke = {
                    name: json.name,
                    type: json.types[0].type.name,
                    typeTwo: json.types[1].type.name,
                    image: json.sprites.front_default
                  }
                  setPokemonThree(poke);
              }
            
              
              
            } catch (error) {
              console.error(error);
            }
          }
          fetchData();
        }, [numOne]);
 


  return (
    <>
    <button className='button-54' onClick={generateNumbers}>Generate new pokemon</button>
    <div className='App-Container'>
      <Pokemon className='Pokemon' name={pokemonOne.name} src={pokemonOne.image} typeOne={pokemonOne.type} typeTwo={pokemonOne.typeTwo} />   
      <Pokemon className='Pokemon' name={pokemonTwo.name} src={pokemonTwo.image} typeOne={pokemonTwo.type} typeTwo={pokemonTwo.typeTwo}/> 
      <Pokemon className='Pokemon' name={pokemonThree.name} src={pokemonThree.image} typeOne={pokemonThree.type} typeTwo={pokemonThree.typeTwo}/>
      
      
    </div>
    </>
  );
}





export default App;


