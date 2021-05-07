import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Loading, MovieCard, MovieForm } from './components/index';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>

      <Route path="/" component={ MovieList } />
    </Router>
  );
}

export default App;
