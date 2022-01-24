import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './post_edit_form.module.css';

const DEFAULT_IMAGE = '/images/default-movie.png';

const PostEditForm = ({ post, onUpdate, onDelete }) => {
	const poster = post.fileURL || DEFAULT_IMAGE;
	const textareaRef = useRef();

	const onClick = () => {
		onDelete(post);
	};

	const onChange = () => {
		const value = textareaRef.current.value;
		const eidtedPost = {
			...post,
			content: value,
		};
		onUpdate(eidtedPost);
	};

	return (
		<li className={styles.post}>
			<p className={styles.date}>{post.date}</p>
			<div className={styles.container_button}>
				<div className={styles.container}>
					<div className={styles.poster_info}>
						<img className={styles.poster} src={poster} alt="default-poster" />
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
							ref={textareaRef}
							name="content"
							value={post.content}
							maxLength="500"
							onChange={onChange}
						></textarea>
					</div>
				</div>
				<div className={styles.buttons}>
					<div className={styles.fileInput}>
						<ImageFileInput />
					</div>
					<Button name="Delete" onClick={onClick} />
				</div>
			</div>
		</li>
	);
};

export default PostEditForm;
