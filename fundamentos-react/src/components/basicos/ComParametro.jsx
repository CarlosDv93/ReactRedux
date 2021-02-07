import React from 'react';

export default function ComParametro(props) {
    console.log(props);
    const status = props.nota >= 7 ? "Aprovado" : "Recuperação";
    //props.nota = Math.ceil(props.nota); //Vide TIP, dá erro. 
    const notaInt = Math.ceil(props.nota);
    return (
        <div>
            <h2>Titulo: {props.titulo}</h2>
            <h3>subtitulo: {props.subTitulo}</h3>
            <p>Nota: { notaInt }</p>
            <p>Status: { status } </p>
        </div>
    )
}

/**
 * TIP Aula 14: PROPS SÃO SOMENTE LEITURA!
 * 
 * TIP AULA 13: 
 * Ao passar o parametro nota com {}, ele receberá o tipo numerico. 
 * Ao passar o parametro nota com "" ele receberá o tipo string
 * Vide o index.js para entender a passagem de parametros
 * 
 * HINT: Params é por convenção chamado de props (properties)
 */