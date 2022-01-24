import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './post_add_form.module.css';

const DEFAULT_IMAGE = '/images/default-movie.png';

const PostAddForm = ({ movie, onAdd }) => {
	if (!movie) {
		return null;
	}
	const title = movie.movieNm;
	const year = movie.prdtYear || '';
	const nation = movie.nationAlt || '';
	const genre = movie.genreAlt || '';
	const director = movie.directors[0] ? movie.directors[0].peopleNm : '';

	const getFormatDate = () => {
		const date = new Date();
		const year = date.getFullYear(); // yyyy
		let month = date.getMonth() + 1;
		month = month >= 10 ? month : '0' + month;
		const day = date.getDate() - 1;
		return year + '.' + month + '.' + day;
	};

	const onChange = () => {
		console.log(onChange);
	};

	return (
		<li className={styles.post}>
			<div className={styles.container_button}>
				<div className={styles.container}>
					<div className={styles.poster_info}>
						<img
							className={styles.poster}
							src={DEFAULT_IMAGE}
							alt="default-poster"
						/>
						<div className={styles.info}>
							<p className={styles.year}>{year}</p>
							<p className={styles.nation}>{nation}</p>
							<p className={styles.genre}>{genre}</p>
							<p className={styles.director}>{director}</p>
						</div>
					</div>
					<div className={styles.movieNm_content}>
						<h1 className={styles.movieNm}>{title}</h1>
						<textarea
							className={styles.content}
							name="content"
							maxLength="500"
							placeholder="내용을 입력하세요."
							onChange={onChange}
						></textarea>
					</div>
				</div>
				<div className={styles.buttons}>
					<div className={styles.fileInput}>
						<ImageFileInput />
					</div>
					<Button name="Add" />
				</div>
			</div>
		</li>
	);
};

export default PostAddForm;
