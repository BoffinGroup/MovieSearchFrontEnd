import React, { Component } from "react";

class MovieSearch extends Component {

    //Note: This code can be refactored better
    constructor(props){
        super(props);
        this.state = {
            searchMovies: "",
            movies:""
          };
    }
  

  handleOnChange = (event) => {
    this.setState({ searchMovies: event.target.value });
  };



  handleSearch = () => {
      fetch(`https://localhost:44337/api/Movie/movie-search-by-title?title=${this.state.searchMovies}`)
      .then(res => res.json())
      .then(result => {this.setState({movies:result.data}); console.log(result);})
  };

  render() {
    return (
      <div>
        <h1>Welcome to the movie search app</h1>
        <input
          name="text"
          type="text"
          placeholder="Search"
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.searchMovies}
        />
        <button onClick={this.handleSearch}>Search</button>
        <div key={this.state.movies.imdbID} hidden={this.state.movies.imdbID == null}>
         <p>Poster:{this.state.movies.poster}</p>
         <p>Imdb Sscore:{this.state.movies.imdbRating}</p>
         <p>Description: {this.state.movies.plot}</p>
        </div>
      </div>
      
    );
  }
}

export default MovieSearch;
