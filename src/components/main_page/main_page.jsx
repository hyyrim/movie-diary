import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './main_page.module.css';
import { useHistory } from 'react-router-dom';
import Diary from '../diary/diary';
import SearchMovie from '../search_movie/search_movie';

const MainPage = ({ authService, movieService, imageService, database }) => {
	const history = useHistory();
	const historyState = history.location.state;
	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState(null);
	const [posts, setPosts] = useState({});
	const [userId, setUserId] = useState(historyState && historyState.id);

	const onLogout = () => {
		authService.logout();
	};

	// 다이어리 불러오기

	useEffect(() => {
		if (!userId) {
			return;
		}
		const stopSync = database.syncDiary(userId, (posts) => {
			setPosts(posts);
		});
		return () => stopSync();
	}, []);

	// 로그아웃시 로그인 화면으로
	useEffect(() => {
		authService.onAuthChange((user) => {
			if (user) {
				setUserId(user.uid);
			} else {
				history.push('/');
			}
		});
	});

	// 영화 검색
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
		database.savePost(userId, post);
	};

	const onUpdate = (post) => {
		setPosts((posts) => {
			const updated = { ...posts };
			updated[post.id] = post;
			return updated;
		});
		database.savePost(userId, post);
	};

	const onDelete = (post) => {
		setPosts((posts) => {
			const updated = { ...posts };
			delete updated[post.id];
			return updated;
		});
		database.removePost(userId, post);
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
