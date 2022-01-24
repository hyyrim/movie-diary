import React, { useRef } from 'react';
import styles from './image_file_input.module.css';
import { ImUpload2 } from 'react-icons/im';

const ImageFileInput = (props) => {
	const inputRef = useRef();
	const onClick = (e) => {
		e.preventDefault();
		inputRef.current.click();
	};

	return (
		<div className={styles.container}>
			<input
				className={styles.input}
				ref={inputRef}
				type="file"
				accept="image/*"
				name="file"
			/>
			<button className={styles.button} onClick={onClick}>
				<ImUpload2 />
			</button>
		</div>
	);
};

export default ImageFileInput;
