import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header/header';
import Login from './components/login/login';
import Main from './components/main/main';

function App({ authService }) {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Login authService={authService} />
					</Route>
					<Route exact path="/main">
						<Main authService={authService} />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
