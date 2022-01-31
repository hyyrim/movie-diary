import axios from 'axios';

class MovieService {
	constructor() {
		this.client = axios.create({
			baseURL: 'http://kobis.or.kr/kobisopenapi/webservice/rest',
			params: { key: process.env.REACT_APP_MOVIE_API_KEY },
		});
	}

	async setMovies() {
		const date = this.getFormatDate();
		const response = await this.client.get(
			'boxoffice/searchDailyBoxOfficeList.json',
			{
				params: {
					targetDt: date,
				},
			}
		);
		return response.data.boxOfficeResult.dailyBoxOfficeList;
	}

	async searchMovie(movieName) {
		const response = await this.client.get('movie/searchMovieList.json', {
			params: {
				movieNm: movieName,
				itemPerPage: 30,
			},
		});
		return response.data.movieListResult.movieList;
	}

	getFormatDate() {
		const date = new Date();
		const year = date.getFullYear(); // yyyy
		let month = date.getMonth() + 1;
		month = month >= 10 ? month : '0' + month;
		const day = date.getDate() - 1;
		return year + month + day;
	}
}

export default MovieService;
