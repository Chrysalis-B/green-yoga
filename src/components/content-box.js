import React from 'react'
import './content-box.css'
import Plantation from './plantation'
import Pranic from './pranic'


export default (props) => {
    return (
     <div className="content-box__container">
        {props.plantation && <Plantation/>}
        {props.pranic && <Pranic/>}
     </div>
    )
}