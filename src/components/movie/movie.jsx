import React from 'react';

const Movie = ({ movie }) => {
	console.log(movie);
	return <h1>{movie.movieNm}</h1>;
};

export default Movie;
