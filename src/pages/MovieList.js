import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import movieslists from '../services/movieData';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movieObj: undefined,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const { getMovies } = movieAPI;
    const returnRequest = await fetch(getMovies(movieslists));
    const movielist = await returnRequest.json();
    this.setState({
      movieObj: movielist,
    });
  }

  render() {
    const { movies, movieObj } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        <p>Ola</p>
        {movieObj === undefined
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }

        {/* {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)} */}

      </div>
    );
  }
}

export default MovieList;
