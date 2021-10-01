import React from 'react';

import { useHistory } from 'react-router-dom'; {/* Utilizado para receber o histórico */}

function Home(){

    let history = useHistory(); {/* Armazena o histórico */}

    const handleButton = () => {

        history.replace('/about'); {/* Substitui o path atual */}

    };

    return(

        <div>
            <h4>Home</h4>

            <button onClick={handleButton}>Ir para a página SOBRE</button>
        </div>

    );

}

export default Home;