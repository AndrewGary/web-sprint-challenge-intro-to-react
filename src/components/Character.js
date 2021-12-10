// Write your Character component here
import React from 'react'
import styled from 'styled-components';

export default function Character(props) {
    
    const name = props.name;
    const id = props.id
    const currentCharacter = props.currentCharacter;

    const StyledCharacter = styled.div`
        color: red;
        width: 60%;
        h1{
            background-color: rgba(0, 0, 0, .2);
            
            &:hover{
                background-color: rgba(0, 0, 0, .1);
            }
        }

        p {
            padding-left: 5%;
            font-weight: bold;
        }
        p span{
            font-size: 2rem;
            color: royalblue;
            font-weight: heavy;
        }
    `

    return (
        
        <StyledCharacter>
        <h1 onClick={() => props.currentCharacter != null ? props.close() : props.open(props.id)}>{name}</h1>
        {
            currentCharacter === props.id ? (
              <>
                <p><span>Name:</span> {props.info.name}</p>
                <p><span>Gender:</span> {props.info.gender}</p>
                <p><span>Height:</span> {props.info.height}</p>
                <p><span>Mass:</span> {props.info.mass}</p>
                <p><span>BirthYear:</span> {props.info.birth_year}</p>
                <p><span>Eye Color:</span> {props.info.eye_color}</p>
                <p><span>Skin Color:</span> {props.info.skin_color}</p>
              </>  
            ) : null
        }
        </StyledCharacter>
        
    ) 
}
