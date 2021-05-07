import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const { getMovies } = movieAPI;

    const movies = await getMovies();
    this.setState({
      loading: false,
      movies,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { storyline, imagePath, genre, rating, subtitle } = {};
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : <div>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
                                  </div> }
      </div>
    );
  }
}

export default MovieDetails;
