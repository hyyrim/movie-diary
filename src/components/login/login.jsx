import React, { useEffect } from 'react';
import styles from './login.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useHistory } from 'react-router-dom';

const Login = ({ authService }) => {
	const history = useHistory();

	const goToMain = (userId) => {
		history.push({
			pathname: '/main',
			state: { id: userId },
		});
	};

	const onClick = (e) => {
		authService //
			.login(e.currentTarget.innerText)
			.then((data) => goToMain(data.user.uid));
	};

	useEffect(() => {
		authService //
			.onAuthChange((user) => {
				user && goToMain(user.uid);
			});
	}, [authService]);

	return (
		<section className={styles.login}>
			<Header />
			<section>
				<h1 className={styles.title}>Login</h1>
				<ul className={styles.list}>
					<li className={styles.item}>
						<button className={styles.button} onClick={onClick}>
							Google
						</button>
					</li>
					<li className={styles.item}>
						<button className={styles.button} onClick={onClick}>
							Github
						</button>
					</li>
				</ul>
			</section>
			<Footer />
		</section>
	);
};

export default Login;
