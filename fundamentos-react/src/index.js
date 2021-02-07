import React from 'react';
import ReactDOM from 'react-dom';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import "./index.css";

ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro titulo="Situação do Aluno" 
            subTitulo="Pedro" 
            nota={9.3}/>
    </div>,
    document.getElementById('root')
)