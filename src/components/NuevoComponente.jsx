import React from 'react'

export const NuevoComponente = (props) => {
    console.log("props",props);
  return (
    <>
        <h2 className = "App">mi edad es {props.edad} </h2>

    </>
  )
}
