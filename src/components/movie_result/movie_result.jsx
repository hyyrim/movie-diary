import React, { useState } from 'react';
import styles from './movie_result.module.css';

const MovieResult = ({ movie, onMovieClick, onSelect, selected }) => {
	const handleMovieClick = () => {
		onMovieClick(movie);
		onSelect(movie.movieCd);
	};

	return (
		<div
			className={`${styles.movie} ${
				movie.movieCd == selected ? styles.selected : ''
			}`}
			onClick={handleMovieClick}
		>
			<div className={styles.title}>
				<h1 className={styles.nameKR}>{movie.movieNm}</h1>
				{movie.movieNmEn && (
					<p className={styles.nameENG}>({movie.movieNmEn})</p>
				)}
			</div>
			<div className={styles.info}>
				{movie.prdtYear && <p className={styles.year}>{movie.prdtYear}</p>}
				{movie.nationAlt && <p className={styles.nation}>{movie.nationAlt}</p>}
				{movie.genreAlt && <p className={styles.genre}>{movie.genreAlt}</p>}
				{movie.directors[0] && (
					<p className={styles.director}>감독 {movie.directors[0].peopleNm}</p>
				)}
			</div>
		</div>
	);
};

export default MovieResult;
