import React from 'react';

const aleatorio = props => {
    /*
    const min = props.min;
    const max = props.max;
    */

    //Usando Destructuring
    const { min, max } = props;
    const aleatorio =
        parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <h2>Valor Aleatorio</h2>
            <p><strong>Valor Minimo: </strong>{min}</p>
            <p><strong>Valor Máximo: </strong>{max}</p>
            <p><strong>Valor Escolhido: </strong>{aleatorio}</p>
        </div>
    )
}

export default aleatorio;

//Aula 17 - Desafio:
//Gerar um numero aleatorio entre um minimo e máximo