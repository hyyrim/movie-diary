import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './main_page.module.css';
import { useHistory } from 'react-router-dom';
import Diary from '../diary/diary';
import SearchMovie from '../search_movie/search_movie';

const MainPage = ({ authService, movieService }) => {
	const [movies, setMovies] = useState([]);
	const [posts, setPosts] = useState({
		1: {
			title: 'Title1',
			content: 'Content',
		},
		2: {
			title: 'Title2',
			content: 'Content',
		},
		3: {
			title: 'Title3',
			content: 'Content',
		},
	});

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
		movieService
			.setMovies() //
			.then((movies) => setMovies(movies));
	}, []);

	return (
		<section className={styles.main}>
			<Header onLogout={onLogout} />
			<div className={styles.container}>
				<SearchMovie movies={movies} />
				<Diary posts={posts} />
			</div>
			<Footer />
		</section>
	);
};

export default MainPage;
