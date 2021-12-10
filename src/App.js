import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character.js';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const openCharacter = id => {
    setCurrentCharacter(id);
  }

  const closeCharacter = id =>{
    setCurrentCharacter(null);
  }

  useEffect(() => {
    axios.get('http://swapi.dev/api/people')
    .then(resp => {
      // console.log(resp.data.results);
      setCharacters(resp.data.results);
    })
    .catch(error => {
      console.error(error);
    })
  }, [])

  

  return (
    <AppContainer>
      <h1 className="Header"> Star Wars Characters</h1>
      {
        characters.map((ch, index) => {
          return <Character id={index} open={openCharacter} close={closeCharacter} name={ch.name} info={ch} currentCharacter={currentCharacter}/>
        })
      }
    </AppContainer>
  );
}

export default App;
