import React from 'react'

const CreditCard = (props) => {
    const divStyle = {
        backgroundColor: props.bgColor,
        borderRadius: "5px",
        width: "300px",
        
    }
  return (
    <div style={divStyle}>
        <h3>{props.type}</h3>
        <h1>···· ···· ···· {props.number.slice(-4)}</h1>
        <div>
            <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
            <p>{props.bank}</p>
        </div>
        <p>{props.owner}</p>
    </div>
  )
}

export default CreditCard