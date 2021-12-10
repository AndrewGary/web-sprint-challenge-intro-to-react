// Write your Character component here
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import styled, { keyframes } from 'styled-components';

export default function Character(props) {
    const name = props.name;
    const key = props.key;
   
    console.log(props);
    console.log(key);

    return <h1>{name}</h1>  
}
