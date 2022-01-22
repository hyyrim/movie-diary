import React from 'react';
import styles from './movie.module.css';

const Movie = ({ movie }) => {
	return (
		<div className={styles.movie}>
			<p className={styles.rank}>{movie.rank}</p>
			<div className={styles.info}>
				<p className={styles.name}>{movie.movieNm}</p>
				<p className={styles.openDate}>개봉일 {movie.openDt}</p>
			</div>
		</div>
	);
};

export default Movie;
