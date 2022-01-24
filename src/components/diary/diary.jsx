import React from 'react';
import PostAddForm from '../post_add_form/post_add_form';
import PostEditForm from '../post_edit_form/post_edit_form';
import styles from './diary.module.css';

const Diary = ({ posts, movie, onUpdate, onDelete }) => {
	return (
		<section className={styles.diary}>
			<h1 className={styles.title}>Diary</h1>
			<ul className={styles.posts}>
				<PostAddForm movie={movie} onAdd={onUpdate} />
				{Object.keys(posts).map((key) => (
					<PostEditForm
						key={key}
						post={posts[key]}
						onUpdate={onUpdate}
						onDelete={onDelete}
					/>
				))}
			</ul>
		</section>
	);
};

export default Diary;
