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

    this.setMovieData = this.setMovieData.bind(this)
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
    fetch(`${baseURL}t=${this.state.input}`)
      .then(response => response.json())
      .then(json => {
        this.setMovieData(json)
      })     
  }

  render() {
    return (
      <div className="container">
        <Navbar 
          setMovieData={this.setMovieData}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        {
          this.state.movieData && (
            <MovieCard  movieData={this.state.movieData} />
          )
        }
      </div>
    );
  }
}

export default App;