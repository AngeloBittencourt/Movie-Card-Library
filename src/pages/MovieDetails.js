import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const { getMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    const movie = await getMovie(id);
    this.setState({
      loading: false,
      movie,
      path: movie.imagePath,
    });
  }

  handleDelete = () => {
    const { movie: { id } } = this.state;
    const { deleteMovie } = movieAPI;
    deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie, loading, path } = this.state;

    if (loading === true) {
      return <Loading />;
    }

    if (path.startsWith('http')) {
      return (
        <div className="movie-details" data-testid="movie-details">
          <img alt="Movie Cover" src={ movie.imagePath } width="680" />
          <p>{ `Title: ${movie.title}` }</p>
          <p>{ `Subtitle: ${movie.subtitle}` }</p>
          <p>{ `Storyline: ${movie.storyline}` }</p>
          <p>{ `Genre: ${movie.genre}` }</p>
          <p>{ `Rating: ${movie.rating}` }</p>
          <Link className="btn-type" to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
          <Link className="btn-type" onClick={ this.handleDelete } to="/">DELETAR</Link>
          <Link className="btn-type" to="/">VOLTAR</Link>
        </div>
      );
    }
    return (
      <div className="movie-details" data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <p>{ `Title: ${movie.title}` }</p>
        <p>{ `Subtitle: ${movie.subtitle}` }</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>
        <Link className="btn-type" to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
        <Link className="btn-type" onClick={ this.handleDelete } to="/">DELETAR</Link>
        <Link className="btn-type" to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
