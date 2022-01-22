class MovieService {
	constructor() {
		this.requestOptions = {
			method: 'GET',
			redirect: 'follow',
		};
	}

	async setMovies() {
		try {
			const response = await fetch(
				'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=&movieNm=아이언맨',
				this.requestOptions
			);
			const result_1 = await response.json();
			return result_1.movieListResult.movieList;
		} catch (error) {
			return console.log('error', error);
		}
	}
}

export default MovieService;
