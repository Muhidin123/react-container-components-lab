import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";
const query = "I am legend";
const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  `https://api.nytimes.com/svc/movies/v2/reviews/search.json?` +
  `api-key=${NYT_API_KEY}&query=${query}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(URL)
      .then((res) => res.json())
      .then((movies) => {
        console.log(movies.results);
        this.setState({
          movies: movies.results,
        });
      });
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        {this.state.movies.map((movie) => {
          return <MovieReviews movies={movie} />;
        })}
      </div>
    );
  }
}
