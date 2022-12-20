import React from "react";
import hex from './../Hex'

const BackgroundColor = () => {
    const changeColor = () => {
        document.body.style.backgroundColor = generateHex()
    }
    const generateHex = () => {
        let hexColor = '#'
        for(let i=0;i<6;i++) {
            hexColor += hex[Math.floor((Math.random() * hex.length))]
        }
        return hexColor
    }
    return (<button onClick={()=>changeColor()}>
            Change color
        </button>)
}
export default BackgroundColor;