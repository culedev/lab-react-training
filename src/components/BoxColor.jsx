import React from 'react'

const BoxColor = ({r, g, b}) => {
    const divStyles = {
        backgroundColor: "rgb("+r+","+g+","+b+")"
    }
  return (
    <div style={divStyles}>

    <p>rgb({r},{g},{b})</p>

    </div>
  )
}

export default BoxColor