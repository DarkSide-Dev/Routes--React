import React from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Categoria from './pages/Categoria';
import Login from './pages/Login';

const isLogged = false;

function App(){

  return(

    <BrowserRouter>
    
      <header>

        Meu site legal

        <nav>

          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">Sobre</Link>
            </li>
            {/*
            <li>
              <Link to="/quem-somos">Quem somos</Link>
            </li>

            <li>
              <Link to="/categoria?tipo=esportes">Esportes</Link> {/ Método de passar parâmetros /}
            </li>

            <li>
              <Link to="/categoria?tipo=noticias">Notícias</Link>
            </li>

            <li>
              {/ <Link to="/categoria/viagens">Viagens</Link> /}
              <Link to="/categoria?tipo=viagens">Viagens</Link>
            </li>

            <li>
              <Link to="/exemplodepaginainexistente">URL inexistente</Link>
            </li>
            */}

          </ul>

        </nav>

      </header>

      <hr/>

      <Switch>

        <Route exact path="/"> {/* Exact diz que a URL tem de ser idêntica ao path */}

          <Home />

        </Route>

        <Route path="/login">

          <Login />
          
        </Route>

        <Route path="/about">

          {isLogged ? <About /> : <Redirect to="/login" />} {/* Privando a rota */}
          
        </Route>

        {/* <Route path="/quem-somos"> 

          <Redirect to="/about" /> {/ Redireciona para outro path /}
          
        </Route>

        <Route path="/categoria"> {/ /:cat diz que tudo o que vier depois da última / vai ser armazenado em uma variável chamada cat /}

          <Categoria />
          
        </Route>
        
        */}

        <Route path="*"> {/ última rota a ser comparada, ou seja, 404 /}

          <h4>Página não encontrada</h4>

        </Route>

      </Switch>

      <hr/>

      <footer>
        Todos os direitos reservados...
      </footer>

    </BrowserRouter>

  );

}

export default App;