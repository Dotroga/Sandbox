import React, {useState} from "react";
import hex from './../Hex'
import './BackgroundColor.scss'

const BackgroundColor = () => {
    const [hexColor, setHexColor] = useState()

    const changeColor = () => {
        document.body.style.backgroundColor = generateHex()
    }

    const generateHex = () => {
        let hexColor = '#'
        for(let i=0;i<6;i++) {
            hexColor += hex[Math.floor((Math.random() * hex.length))]
        }
        setHexColor(hexColor)
        return hexColor
    }

    return (
        <div >
            <button className='changeColor'
                    onClick={()=>changeColor()}>
                Change color
            </button>
            <div className='hexColor'>
                {hexColor}
            </div>
        </div>)
}
export default BackgroundColor;