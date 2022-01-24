import React, { useRef } from 'react';
import styles from './image_file_input.module.css';
import { ImUpload2 } from 'react-icons/im';

const ImageFileInput = ({ imageService, onFileChange }) => {
	const inputRef = useRef();
	const onClick = (e) => {
		e.preventDefault();
		inputRef.current.click();
	};

	const onChange = async (e) => {
		const uploaded = await imageService.upload(e.target.files[0]);
		onFileChange(uploaded.url);
	};

	return (
		<div className={styles.container}>
			<input
				className={styles.input}
				ref={inputRef}
				type="file"
				accept="image/*"
				name="file"
				onChange={onChange}
			/>
			<button className={styles.button} onClick={onClick}>
				<ImUpload2 />
			</button>
		</div>
	);
};

export default ImageFileInput;
