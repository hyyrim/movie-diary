import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth_service';
import MovieService from './service/movie_service';
import ImageService from './service/image_service';

const authService = new AuthService();
const movieService = new MovieService();
const imageService = new ImageService();

ReactDOM.render(
	<React.StrictMode>
		<App
			authService={authService}
			movieService={movieService}
			imageService={imageService}
		/>
	</React.StrictMode>,
	document.getElementById('root')
);
