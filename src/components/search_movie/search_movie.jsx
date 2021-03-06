import React, { useRef, useState } from 'react';
import Movie from '../movie/movie';
import { GrSearch } from 'react-icons/gr';
import styles from './search_movie.module.css';
import MovieResult from '../movie_result/movie_result';

const SearchMovie = ({ movies, onSearch, onMovieClick, selectedMovie }) => {
	const inputRef = useRef();
	const [selected, setSelected] = useState(null);

	const onSubmit = (e) => {
		e.preventDefault();
		const value = inputRef.current.value;
		value && onSearch(value);
		inputRef.current.value = '';
	};

	const onSelect = (cd) => {
		setSelected(cd);
	};

	return (
		<section className={styles.movie_section}>
			<h1 className={styles.title}>Search Movie</h1>
			<form className={styles.form} onSubmit={onSubmit}>
				<input
					className={styles.input}
					ref={inputRef}
					type="text"
					placeholder="영화 제목을 입력하세요."
				/>
				<button className={styles.button}>
					<GrSearch />
				</button>
			</form>
			<div className={styles.container}>
				{movies.length <= 0 && (
					<p className={styles.result}>검색 결과가 존재하지 않습니다.</p>
				)}
				{movies.map((movie) => {
					if (movie.rank) {
						return <Movie key={movie.movieCd} movie={movie} />;
					} else if (movie) {
						return (
							<MovieResult
								key={movie.movieCd}
								movie={movie}
								onMovieClick={onMovieClick}
								onSelect={onSelect}
								selected={selected}
							/>
						);
					}
				})}
			</div>
		</section>
	);
};

export default SearchMovie;
