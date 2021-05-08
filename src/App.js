import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';

import './App.css';

function App() {
  return (
    <Router>
      <header className="movie-card-header">
        <h1 className="page-title">Movie Card Library CRUD</h1>
      </header>
      <Switch>
        <Route path="/" exact component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route component={ NotFound } />
      </Switch>
      <Link className="btn-type" to="/movies/new">ADICIONAR CARTÃO</Link>
    </Router>
  );
}

export default App;
