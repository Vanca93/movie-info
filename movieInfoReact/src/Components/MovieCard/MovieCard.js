import React from 'react';
import './moviecard.css';

const MovieCard = props => (
    <div className="card">
        <img src={props.movieData.Poster} alt="Movie Poster"/>
        <div className="card-body">
        <h5 className="card-title">Movie Title: {props.movieData.Title}</h5>
        <p className="card-text">Year: {props.movieData.Year}</p>
        <p className="card-text">Director: {props.movieData.Director}</p>
        <p className="card-text">Genre: {props.movieData.Genre}</p>
        <p className="card-text">IMDB Rating: {props.movieData.imdbRating}</p>
        </div>
    </div>
)

export default MovieCard;