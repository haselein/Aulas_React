import React from 'react'
import ReactDOM from 'react-dom'
//import { CompA as A, CompB as B } from './Componentes/multiComponents'
//import PrimeiroComponente from './Componentes/PrimeiroComponente';
//import MultiElementos from './Componentes/MultiElementos'
//import FamiliaSilva from './Componentes/FamiliaSilva'
//import Familia from './Componentes/Familia'
//import Membro from './Componentes/Membro'
//import ComponenteComFuncao from './Componentes/ComponenteComFuncao'
import Pai from './Componentes/Pai'



const elemento = document.getElementById('root')

ReactDOM.render(
        <div>
                <Pai />
                {/* <ComponenteComFuncao /> */}
                {/* <Familia sobrenome = 'Haselein'>
                <Membro nome='Vitor' />
                <Membro nome='Ana' />
                <Membro nome='Vanir' />
        </Familia> */}


                {/* <Familia sobrenome='Fonseca'>
                <Membro nome='Joao' />
                <Membro  nome='Maria' /> 
        </Familia> */}


                {/* <FamiliaSilva/> */}
                {/* <MultiElementos />
                <A valor="Ola Componente AAAAAA" />
                <B valor="Ola Componente BBBBBB" /> */}
        </div>

        , elemento);