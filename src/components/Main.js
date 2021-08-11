import React, {useContext} from 'react'
import {TodoContext} from '../context'
import MountainBackground from '../images/Mountain.jpg'
import OceanBackground from '../images/ocean.jpg'
import ParticlesBg from "particles-bg";

function Main({children}) {

    const { darkTheme, click } = useContext(TodoContext)

    const backgroundImage = {
        backgroundImage: darkTheme ? "url(" + OceanBackground + ")" : "url(" + MountainBackground + ")"
    }

    const particles = {
        background: "black" 
        /* <ParticlesBg type="random" bg={true}/> */
    }

    return (
        <div className='Main' style={click ? particles : backgroundImage}> 
            {children}
        </div>
    )
}

export default Main 