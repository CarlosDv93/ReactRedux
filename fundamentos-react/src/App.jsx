import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


export default _ =>
    <div id="app">
        <h1>React - Fundamentos React _</h1>
        <Fragmento />

        <ComParametro titulo="Situação do Aluno"
            subTitulo="Pedro"
            nota={9.3} />

        <Primeiro></Primeiro>
    </div>

/**
 *
 * Alternativa 01:
 ``` js
 export default function (props) {
    return (
        <div id="app">
            <h1>React - Fundamentos React</h1>
            <Fragmento />

            <ComParametro titulo="Situação do Aluno"
                subTitulo="Pedro"
                nota={9.3} />

            <Primeiro></Primeiro>
        </div>
    )
}
```
 * Alternativa 02:
 ``` js
export default (props) => {
    return (
        <div id="app">
            <h1>React - Fundamentos React (props)</h1>
            <Fragmento />

            <ComParametro titulo="Situação do Aluno"
                subTitulo="Pedro"
                nota={9.3} />

            <Primeiro></Primeiro>
        </div>
    )
}
```
 *
 * Alternativa 03:
 ``` js
export default props => {
    return (
        <div id="app">
            <h1>React - Fundamentos React props</h1>
            <Fragmento />

            <ComParametro titulo="Situação do Aluno"
                subTitulo="Pedro"
                nota={9.3} />

            <Primeiro></Primeiro>
        </div>
    )
}
```
 *
 * Alternativa 04:
 ``` js
export default props => {
    return (
        <div id="app">
            <h1>React - Fundamentos React props</h1>
            <Fragmento />

            <ComParametro titulo="Situação do Aluno"
                subTitulo="Pedro"
                nota={9.3} />

            <Primeiro></Primeiro>
        </div>
    )
}
```
 *
 * Alternativa 05: (Mais reduzida, pois não usamos o parametro passado)
 ``` js
export default _ => {
    return (
        <div id="app">
            <h1>React - Fundamentos React _</h1>
            <Fragmento />

            <ComParametro titulo="Situação do Aluno"
                subTitulo="Pedro"
                nota={9.3} />

            <Primeiro></Primeiro>
        </div>
    )
}
```
 */