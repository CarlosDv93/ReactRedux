import React from 'react';

export default function Fragmento(props) {
    return (
        <React.Fragment>
            <h2>Framento</h2>
            <p>Cuidado com esse erro</p>
        </React.Fragment>
    )
}

/**
 * TIP Aula 15: 
 * Existem duas maneiras de retornar elementos adjacentes sem envolver eles em uma div. 
 * PRIMEIRA: <React.Fragment> </React.Fragment>
 * Segunda: <> </>
 * Diferença: Com Reack.Fragment é possivel usar outros elementos/atributos já com as tags sozinhas
 * não é possivel usar outros elementos.
 */