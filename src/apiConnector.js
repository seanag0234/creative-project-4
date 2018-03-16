import {baseUrl} from "./config";
import axios from 'axios';

let getMovies = function() {
  return axios.get(baseUrl + '/movies');
};

let addMovie = function (movie) {
  let postBody = {
    movie: movie
  };
  return axios.post('/movies', postBody);
};

let updateMovie = function (movie) {
  let body = {
    movie: movie
  };
  return axios.put(`/movies/${movie.id}`, body)
};

let deleteMovie = function (id) {
  return axios.delete(`/movies/${id}`);
};

export {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie
}
