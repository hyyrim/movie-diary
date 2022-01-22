import React from 'react';
import Post from '../post/post';
import styles from './diary.module.css';

const Diary = ({ posts }) => {
	return (
		<section className={styles.diary}>
			<h1 className={styles.title}>Diary</h1>
			<ul>
				{Object.keys(posts).map((key) => (
					<Post key={key} post={posts[key]} />
				))}
			</ul>
		</section>
	);
};

export default Diary;
