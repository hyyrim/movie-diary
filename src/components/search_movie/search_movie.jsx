import React from 'react';
import Movie from '../movie/movie';
import styles from './search_movie.module.css';

const SearchMovie = ({ movies }) => {
	return (
		<section className={styles.movie_section}>
			<h1>Search Movie</h1>
			{movies.map((movie) => (
				<Movie movie={movie} />
			))}
		</section>
	);
};

export default SearchMovie;
