import React, { useState, useEffect } from 'react';

export default function Vxtel() {
    const [message, setMessage] = useState('');
    // Send a request to the server on port 8080 to retrieve message
    useEffect(() => {
      fetch('http://localhost:8080/hello')
              .then(response => {
                  return response.json();
              })
              .then(res => {
                  setMessage(res);
              })
    });
    return(
        <div className="main">
            <h3>Conheça o FaleMais da VxTel!</h3>
            <span>Com ele, você adquire um dos planos disponiveis
                e pode falar de graça por <strong>30, 60 ou 120 minutos</strong>. A escolha é sua!
            </span>
            <br/>
            <p>Calcule aqui e veja qual a melhor opção para você.</p>
        </div>
    )
}