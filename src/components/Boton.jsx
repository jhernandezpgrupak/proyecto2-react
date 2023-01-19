import React from "react";
import '../css/Boton.css'
function Boton({texto, BotonClick, manejarClick}){ //Desestructuracion
    return(
        <button
            className={ BotonClick ? "boton-click" : "boton-reiniciar" }
            onClick={manejarClick}>
            {texto}
        </button>
    );
}

export default Boton;