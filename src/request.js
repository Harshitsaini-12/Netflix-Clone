const API_KEY ="beffdd603e0625de5cc25ee3c6da56b1";


const requests={
fetchTrending:`/trending/all/week?api_key=${API_KEY}&languages=en-US`,
fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;