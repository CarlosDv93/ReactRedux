import React from 'react';

export default function ComParametro(props) {
    console.log(props);
    return (
        <div>
            <h2>Titulo: {props.titulo}</h2>
            <h3>subtitulo: {props.subTitulo}</h3>
            <p>Nota: { props.nota }</p>
        </div>
    )
}

/**
 * TIP AULA 13: 
 * Ao passar o parametro nota com {}, ele receberá o tipo numerico. 
 * Ao passar o parametro nota com "" ele receberá o tipo string
 * Vide o index.js para entender a passagem de parametros
 * 
 * HINT: Params é por convenção chamado de props (properties)
 */