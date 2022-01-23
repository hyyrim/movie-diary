import React from 'react';
import styles from './image_file_input.module.css';
import { ImUpload2 } from 'react-icons/im';

const ImageFileInput = (props) => (
	<div className={styles.container}>
		<input className={styles.input} type="file" accept="image/*" name="file" />
		<button className={styles.button}>
			<ImUpload2 />
		</button>
	</div>
);

export default ImageFileInput;
