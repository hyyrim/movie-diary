import React, { memo } from 'react';
import styles from './footer.module.css';
import { AiOutlineGithub } from 'react-icons/ai';

const Footer = memo((props) => (
	<footer className={styles.footer}>
		<p className={styles.name}>Github</p>
		<a
			className={styles.icon}
			href="https://github.com/hyyrim/movie-diary"
			target="_blank"
		>
			<AiOutlineGithub />
		</a>
	</footer>
));

export default Footer;
