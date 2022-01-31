class MovieService {
	constructor() {
		this.requestOptions = {
			method: 'GET',
			redirect: 'follow',
		};
	}

	async setMovies() {
		const date = this.getFormatDate();
		try {
			const response = await fetch(
				`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_MOVIE_API_KEY}&targetDt=${date}`,
				this.requestOptions
			);
			const result_1 = await response.json();
			return result_1.boxOfficeResult.dailyBoxOfficeList;
		} catch (error) {
			return console.log('error', error);
		}
	}

	async searchMovie(movieName) {
		try {
			const response = await fetch(
				`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${process.env.REACT_APP_MOVIE_API_KEY}&movieNm=${movieName}&itemPerPage=30`,

				this.requestOptions
			);
			const result_1 = await response.json();
			return result_1.movieListResult.movieList;
		} catch (error) {
			return console.log('error', error);
		}
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
