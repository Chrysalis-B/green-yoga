import React from 'react'
import './content-box.css'
import Plantation from './plantation'


export default (props) => {
    return (
     <div className="content-box__container">
        {props.plantation && <Plantation/>}
        {props.pranic && <p>pranic</p>}
     </div>
    )
}