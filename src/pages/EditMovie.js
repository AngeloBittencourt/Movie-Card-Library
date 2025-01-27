import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import { Loading, MovieForm } from '../components';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  fetchMovie = async () => {
    const { getMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    const movie = await getMovie(id);
    this.setState({
      status: 'loaded',
      movie,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default EditMovie;
