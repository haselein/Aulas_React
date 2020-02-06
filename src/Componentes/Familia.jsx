import React from 'react'
import { ComponenteFilhos } from '../Utils/Utils'

export default props =>
    <div>
        <h1> Familia</h1>


        {ComponenteFilhos(props)}


        {/* {React.cloneElement(props.children, { ...props })} */}
        {/* {React.cloneElement(props.children, props)} */}

        {/* {React.cloneElement(props.children,
         { sobrenome: props.sobrenome})} */}
    </div>