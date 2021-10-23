import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './routes/Home';
import CreatePost from './routes/CreatePost';
import Posts from './routes/Posts';
import Post from './routes/Post'

function App() {
  return (
    <div className='App'>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/posts'>Posts</Link>
            </li>
            <li>
              <Link to='/create-post'>Create a post</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/create-post' component={CreatePost} />
          <Route exact path='/posts' component={Posts} />
          <Route exact path='/posts/:postId' component={Post} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;

// libs: React Hook Form, Axios, Yup
// Fazer aplicação que cria uma nova postagem na JsonPlaceHolder - Free Fake Api
// Campos a ser enviados : título e descrição
// validação nao deve permitir campos vazios e a descrição deve ter ao menos 30 caracteres
// Opcional: pacotes de estilização

/*
    CRIAR POSTAGEM
    input title
    input description
    button Criar
*/
