import React from 'react';
import PostAddForm from '../post_add_form/post_add_form';
import PostEditForm from '../post_edit_form/post_edit_form';
import styles from './diary.module.css';

const Diary = ({ posts, movie, onAdd, onUpdate, onDelete, imageService }) => {
	return (
		<section className={styles.diary}>
			<div className={styles.title_image}>
				<img className={styles.image} src="/images/diary.png" alt="diary" />
			</div>
			<ul className={styles.posts}>
				<PostAddForm imageService={imageService} movie={movie} onAdd={onAdd} />
				{Object.keys(posts)
					.reverse()
					.map((key) => (
						<PostEditForm
							key={key}
							post={posts[key]}
							imageService={imageService}
							onUpdate={onUpdate}
							onDelete={onDelete}
						/>
					))}
			</ul>
		</section>
	);
};

export default Diary;
