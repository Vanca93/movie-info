import React, { Component } from 'react';
import './App.css';
import MovieCard from './Components/MovieCard/MovieCard';
import Navbar from './Components/Navbar/Navbar';
import baseURL from './rest';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      input: '',
      movieData: null,
    });
  }

  setMovieData(data) {
    this.setState({ movieData: data})
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    fetch(`${baseURL}s=${this.state.input}`)
      .then(response => response.json())
      .then(json => {
        this.setMovieData(json)
      })     
  }

  render() {
    return (
      <div className="container">
        <Navbar
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        <div className="resultContainer">
        {
          this.state.movieData && (
            this.state.movieData.Search.map(movie => 
              <MovieCard
                movieData={this.state.movieData}
                setMovieData={this.setMovieData}
                movie={movie}
              />
            )
          )
        }
        </div>
      </div>
    );
  }
}

export default App;