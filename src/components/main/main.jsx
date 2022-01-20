import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './main.module.css';

const Main = ({ authService }) => {
	return (
		<section className={styles.main}>
			<Header />
			<div className={styles.container}>
				<h1>MainPage</h1>
			</div>
			<Footer />
		</section>
	);
};

export default Main;
