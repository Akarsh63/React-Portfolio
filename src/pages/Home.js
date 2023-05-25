import React from 'react'
import Maindescription from '../Components/Maindescription';
import Abouthome from '../Components/Abouthome';
import Homethr from '../Components/Home3';
import Someprojects from '../Components/Someprojects';

export default function Home() {
  return (
    <div>
      <Maindescription />
      <Abouthome />
      <Homethr />
      <Someprojects />
    </div>
  )
}