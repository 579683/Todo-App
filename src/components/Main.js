import React, {useContext} from 'react'
import {TodoContext} from '../context'
import MountainBackground from '../images/Mountain.jpg'
import OceanBackground from '../images/ocean.jpg'

function Main({children}) {

    const { darkTheme } = useContext(TodoContext)
    return (
        <div className='Main' style={{backgroundImage: darkTheme ? "url(" + OceanBackground + ")" : "url(" + MountainBackground + ")"} }> {/*style={{backgroundImage: darkTheme ? './images/Mountain.jpg' : './images/ocean.jpg'}} */}
            {children}
        </div>
    )
}

export default Main 