import React,{useState} from "react";
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import {Home}  from './components/Home';

let contador = 0;

const renderReact = ReactDOM.createRoot(document.getElementById('root'))

    setInterval(() => {
 
    renderReact.render(
        <Home contador={contador} />
    )
    contador++;
}, 1000)




