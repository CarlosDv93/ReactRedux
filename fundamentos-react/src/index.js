import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


const tag = <strong>Olá Mundo - React tag </strong>;
ReactDOM.render(
    <div>
        {tag}
    </div>,
    document.getElementById('root')
)