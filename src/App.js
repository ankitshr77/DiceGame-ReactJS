import { useState } from 'react';
import './App.css';

function App() {
  const [dice, setDice] = useState(1)
  const [dice2, setDice2] = useState(6)

  const randomRole = () =>{
    const ranno = Math.floor(Math.random()*6) + 1
    setDice(ranno)
    const ranno2 = Math.floor(Math.random()*6) + 1
    setDice(ranno2)
  }

  return (
    <div className="App">
      <h1><u>DICE ROLLING GAME</u></h1>
      <img className='dicefirst' width={200} height={200} src={require(`./assets/${dice}.png`)}></img>
      <img width={200} height={200} src={require(`./assets/${dice2}.png`)}></img>
      <br/>
      <br/>
      <button className='button' onClick={()=>randomRole()}>ROLL</button>
    </div>
  );
}

export default App;
