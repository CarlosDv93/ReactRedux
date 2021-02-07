import React from 'react';

export default function Primeiro() {
    const msg = 'Seja Bem vindo(a)';
    return (
        <div>
            <h2>
                Primeiro Componente
            </h2>
            <p> { msg } </p>
        </div>
    )
}

/* Dica da aula 12: 

Se retornar a aplicação assim: 
```js
 return <div>
        <h2>
            Primeiro Componente
        </h2>
    </div>
```
O react é capaz de interpretar... 

Por sua se retornar a aplicação assim
```js
 return 
    <div>
        <h2>
            Primeiro Componente
        </h2>
    </div>
```
O react apresenta erro. Para retornar dessa segunda maneira, é necessário vc
colocar o retorno entre (), o que o transformará em uma expressão JSX e fará o react o interpretar
corretamente. Ficando assim o código: 
```js
 return (
        <div>
            <h2>
                Primeiro Componente
            </h2>
        </div>
    )
```
HINT: RETORNO SEMPRE TEM QUE TER ALGO NA PRIMEIRA LINHA
*/