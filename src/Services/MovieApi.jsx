import axios from "axios";

const movieDbUrl= "https://api.themoviedb.org/3"
const api_key='2ec0d66f5bdf1dd12eefa0723f1479cf'

const movieGenreUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf'

const getTrendingVideos= axios.get(movieDbUrl+"/trending/all/day?api_key="+api_key);
const getMovieByGenre = (id)=> axios.get(movieGenreUrl+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenre
}