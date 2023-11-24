import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './count'

function App() {

  return (
    <>
    <Counter></Counter>
      <Sazid ></Sazid>
      <Hafsa></Hafsa>
      <Button></Button>
      <Device name='laptop'price='70,000'></Device>
      <Device name='mobile' price='15,00'></Device>
      <Device name='car' price='50,00000'></Device>
      
      
      </>
      
  )
}
function Sazid(){
  
  const age=24;
  const every={name:'sazid',id:3654876}
  return(
    <div className='student'>
   <h1 >i am {every.name},i am {age} years old</h1>
   <h1>i love hafsa</h1>
   </div>
  )
}
function Hafsa(){
  const hafsaStyle={
    color:'blue',
    backgroundColor: 'lightblue'
  }
  return(
    <div className='student' style={hafsaStyle}>
      <h3>i love hafsa since 4 years.</h3>
      <h6>She is very cute</h6>
    </div>
  )
}
function Device(props){
  return(
    <div>
      <h2>i have a: {props.name},It cost: {props.price}</h2>
    </div>
  )
}
function Button(){

  function clickhandler(){
    alert('try again');
  }
  return(
    <button onClick={clickhandler}>click me</button>
  )
}


export default App
