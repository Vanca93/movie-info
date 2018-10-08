import React from 'react';
import './moviecard.css';

const MovieCard = props => {
    return (
        <div className="card">
            <div>
                <img src={props.movie.Poster} alt="Movie Poster"/>
            </div>
            <div className="card-body">
            <h5 className="card-title">Movie Title: {props.movie.Title}</h5>
            <p className="card-text">Year: {props.movie.Year}</p>
            </div>
        </div>
    );
}



export default MovieCard;