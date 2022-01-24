import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './main_page.module.css';
import { useHistory } from 'react-router-dom';
import Diary from '../diary/diary';
import SearchMovie from '../search_movie/search_movie';

const MainPage = ({ authService, movieService }) => {
	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState(null);
	const [posts, setPosts] = useState({
		1: {
			id: 1,
			date: '2021.01.23',
			movieNm: '스파이더맨1',
			prdtYear: '2017',
			nationAlt: '미국',
			genreAlt: '액션',
			directors: '한혜림',
			content: `오늘은 스파이더맨을봤다`,
			fileName: '',
			fileURL:
				'https://mblogthumb-phinf.pstatic.net/20130629_35/kimmisung08_1372495442669jvobl_JPEG/%BE%EE%B8%DE%C0%CC%C2%A1_%BD%BA%C6%C4%C0%CC%B4%F5%B8%C71.jpg?type=w2',
		},
		2: {
			id: 2,
			date: '2021.01.23',
			movieNm: '스파이더맨2',
			prdtYear: '2017',
			nationAlt: '미국',
			genreAlt: '액션',
			directors: '제임스 딘',
			content:
				'오늘은 스파이더맨을봤다 어쩌구저쩌구 이랬따 저랫다 잘생겼다와아',
			fileName: '',
			fileURL: '',
		},
		3: {
			id: 3,
			date: '2021.01.23',
			movieNm: '스파이더맨3',
			prdtYear: '2017',
			nationAlt: '미국',
			genreAlt: '액션',
			directors: '제임스 딘',
			content:
				'오늘은 스파이더맨을봤다 어쩌구저쩌구 이랬따 저랫다 잘생겼다와아',
			fileName: '',
			fileURL: '',
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
					onUpdate={onUpdate}
					onDelete={onDelete}
				/>
			</div>
			<Footer />
		</section>
	);
};

export default MainPage;
