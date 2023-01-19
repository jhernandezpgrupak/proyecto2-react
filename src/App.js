import './App.css';
import FreeCodeCamp from './img/FreeCodeCamp.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';//HOOKS : FUNCIONES ESPECIALES

function App() {

  const [numClicks, setnumClicks] = useState(0); 

  const manejarClick = () =>{
    setnumClicks(numClicks + 1);    
  }
   
  const reiniciarContador = () =>{
    setnumClicks(0);  
  } 

  return ( 
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src = {FreeCodeCamp}
          alt='Logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClicks={numClicks}
        />
        <Boton
        texto = 'Click'
        BotonClick = {true}
        manejarClick = {manejarClick}/>
        <Boton
        texto = 'Reiniciar'
        BotonClick = {false}
        manejarClick = {reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
