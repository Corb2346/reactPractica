import React from 'react'

export const NombreCompleto = (props) => { //properties
    console.log("props",props)
  return (
    <> {/* React.Fragment */ } 
    <h3  className="App">Brayan Correa
        <p className = "App">accion accion xxD</p>
    </h3>
    <h2 className = "App">mi Nombre es {props.name} </h2>
    <h2 className = "App">mi edad es {props.age} </h2>
    <NombreCompleto age = {props}/>
    </> 
    //no puede haber elementos del mismo nivel solo 1 
    //1 etiqueta padre

  )
  
}

//export { NombreCompleto, OtraExportacion};

//solamente se puede tener un exportacion por default

//si haces la exportacion por nombre se hace la reestructuracion

//importar el componente en app.js