import { useState, useRef } from 'react'
import './App.css'

function App() {

  const myFunction = async () => {
    try {
      const name = document.getElementById('name').value.toLowerCase();
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      console.log(data)
      const image = document.getElementById('image');
      const sprite = data.sprites.front_default;
      image.src = sprite;
      image.style.display = 'block'

    } catch (error) {

    }
  }
  return (
    <>
      <div>
        <input type="text" placeholder='enter pokemon name' id='name' />
        <button onClick={myFunction}>submit</button>
        <br />
        <br />

        <img src="" alt="pokemon" id='image' style={{display:'none'}}/>
      </div>
    </>
  )
}

export default App
