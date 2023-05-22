
import { useState } from 'react';
import './App.css';





function App() {

  const [value, setValue] = useState(() => {
    return 0;
  })


  const arrayOfStrings = ['beeboop', 'pasta', 'empoleon', 'Austin Health'];

  const [word, setWord] = useState(() => {
    return arrayOfStrings[1];
  })

  
  function newString () {
    const randNum = Math.floor(Math.random() * arrayOfStrings.length);
    setWord(arrayOfStrings[randNum]);
  }

  const [number, setNumber] = useState(() => {
    return 10;
  })

  const [result, setResult] =useState(() => {
    return 0;
  })

  function getResult(a, b) {
    setResult((prevResult) => prevResult+ value + number);
  } 

  function increase() {
    setValue(prevValue => prevValue + 1);
  }

  function increaseSecond() {
    setNumber(prevNumber => prevNumber + 1);
  }
  

  function decrease() {
    setValue(prevValue => prevValue - 1);
  }

  function decreaseSecond() {
    setNumber(prevValue => prevValue - 1);
  }
 
  return (
    <div className="App">
      <header className="App-header" id='App-header'>
        <h1>Counter (via setCount) </h1>
        <div id='countContainer' className='bot'>
          <button id='buttonOne' onClick={decrease}>-</button>
          <h2>{value}</h2>
          <button id='buttonTwo' onClick={increase}>+</button>
        </div>
      </header>
          <h1 id='combine'onClick={getResult}>combined Total: {result}</h1>
      <header className="App-header-Two" id='App-header'>
        
        <div id='countContainer' className='bot'>
          <button id='buttonOne' onClick={decreaseSecond}>-</button>
          <h2>{number}</h2>
          <button id='buttonTwo' onClick={increaseSecond}>+</button>
        </div>
      </header>
      <header className="App-header-Three" id='App-header'>
        
        <div id='wordChanger'>
          <button id='wordButton' onClick={newString}>generate new string</button>
          <h2 id='generatedWord'>{word}</h2>
          
        </div>
      </header>
    </div>

    
  );
}





export default App;


