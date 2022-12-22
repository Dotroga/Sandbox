import React, {useState} from "react";
import hex from './../Hex'
import close from './../close.svg'
import './BackgroundColor.scss'

const BackgroundColor = () => {
    const [hexColor, setHexColor] = useState('')
    const [counter, setСounter] = useState(0)
    const changeColor = (hex) => {
        document.body.style.backgroundColor = hex
        if (hex === '#ffffff') {
            setHexColor('')
            setСounter(0)
        } else {
            setHexColor(hex)
            setСounter(() => counter + 1)
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
                {counter < 10 ? '' :
                    <div className='counter'>
                        {counter}
                    </div>}
            </div>
            <div className='hexColor'>
                {hexColor}
            </div>
        </div>)
}
export default BackgroundColor;