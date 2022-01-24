import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import MainPage from './components/main_page/main_page';

function App({ authService, movieService, imageService, database }) {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Login authService={authService} />
					</Route>
					<Route exact path="/main">
						<MainPage
							authService={authService}
							movieService={movieService}
							imageService={imageService}
							database={database}
						/>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
