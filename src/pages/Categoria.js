import React from 'react';
import { useParams, useLocation } from 'react-router-dom'; {/* Utilizada para pegar parâmetros vindos da URL [:param - ?param] */}

function useQuery() { {/* Função para receber todos os parâmetros ? existentes na URL */}

    return new URLSearchParams( useLocation().search );

}

function Categoria(){

    // let { cat } = useParams(); {/* Pegando parâmetro da URL */}
    let query = useQuery(); {/* Instânciando a função */}

    let cat = query.get('tipo'); {/* Buscando e armazenando um valor */}


    return(

        <div>

            <h4>Categoria</h4>
            <p>Exibindo item da categoria: {cat}</p>

        </div>

    );

}

export default Categoria;