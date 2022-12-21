import React, {useState} from "react";
import hex from './../Hex'
import close from './../close.svg'
import './BackgroundColor.scss'

const BackgroundColor = () => {
    const [hexColor, setHexColor] = useState('')

    const changeColor = (hex) => {
        document.body.style.backgroundColor = hex
        if (hex === '#ffffff') {
            setHexColor('')
        } else {
            setHexColor(hex)
        }
    }

    const generateHex = () => {
        let hexColor = '#'
        for(let i=0;i<6;i++) {
            hexColor += hex[Math.floor((Math.random() * hex.length))]
        }
        changeColor(hexColor)
        return hexColor
    }

    return (
        <div>
            <div  className='changeColor'>
                <button className='buttonChange'
                    onClick={()=>generateHex()}>
                    Change color
                </button>
                {hexColor && <img
                    className='closeColor'
                    onClick={()=>changeColor('#ffffff')}
                    src={close}
                    alt="close"
                />}
            </div>
            <div className='hexColor'>
                {hexColor}
            </div>
        </div>)
}
export default BackgroundColor;