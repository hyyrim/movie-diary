import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './post.module.css';

const DEFAULT_IMAGE = '/images/default-movie.png';

const Post = ({ post }) => (
	<li className={styles.post}>
		<p className={styles.date}>2021.01.23</p>
		<div className={styles.container_button}>
			<div className={styles.container}>
				<div className={styles.poster_info}>
					<img
						className={styles.poster}
						src={DEFAULT_IMAGE}
						alt="default-poster"
					/>
					<div className={styles.info}>
						<p className={styles.year}>{post.prdtYear}</p>
						<p className={styles.nation}>{post.nationAlt}</p>
						<p className={styles.genre}>{post.genreAlt}</p>
						<p className={styles.director}>{post.directors}</p>
					</div>
				</div>
				<div className={styles.movieNm_content}>
					<h1 className={styles.movieNm}>{post.movieNm}</h1>
					<textarea
						className={styles.content}
						name="content"
						value={post.content}
						maxLength="500"
					></textarea>
				</div>
			</div>
			<div className={styles.buttons}>
				<div className={styles.fileInput}>
					<ImageFileInput />
				</div>
				<Button name="Delete" />
			</div>
		</div>
	</li>
);

export default Post;
