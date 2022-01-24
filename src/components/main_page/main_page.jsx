import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './main_page.module.css';
import { useHistory } from 'react-router-dom';
import Diary from '../diary/diary';
import SearchMovie from '../search_movie/search_movie';

const MainPage = ({ authService, movieService, imageService }) => {
	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState(null);
	const [posts, setPosts] = useState({});

	const history = useHistory();
	const onLogout = () => {
		authService.logout();
	};

	useEffect(() => {
		authService.onAuthChange((user) => {
			if (!user) {
				history.push('/');
			}
		});
	});

	useEffect(() => {
		movieService //
			.setMovies()
			.then((movies) => setMovies(movies));
	}, []);

	const onSearch = (movieName) => {
		movieService //
			.searchMovie(movieName)
			.then((movies) => setMovies(movies));
	};

	const onMovieClick = (movie) => {
		setSelectedMovie(movie);
	};

	const onAdd = (post) => {
		setPosts((posts) => {
			const updated = { ...posts };
			updated[post.id] = post;
			return updated;
		});
		setSelectedMovie(null);
	};

	const onUpdate = (post) => {
		setPosts((posts) => {
			const updated = { ...posts };
			updated[post.id] = post;
			return updated;
		});
	};

	const onDelete = (post) => {
		setPosts((posts) => {
			const updated = { ...posts };
			delete updated[post.id];
			return updated;
		});
	};

	return (
		<section className={styles.main}>
			<Header onLogout={onLogout} />
			<div className={styles.container}>
				<SearchMovie
					movies={movies}
					onSearch={onSearch}
					onMovieClick={onMovieClick}
				/>
				<Diary
					posts={posts}
					movie={selectedMovie}
					imageService={imageService}
					onAdd={onAdd}
					onUpdate={onUpdate}
					onDelete={onDelete}
				/>
			</div>
			<Footer />
		</section>
	);
};

export default MainPage;
