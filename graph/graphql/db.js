import axios from "axios";
const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETALIS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTION_URL = `${BASE_URL}movie_suggestions.json`;

//How axios works
//axios(URL,{params}?)
//First, aixos gets URL string and stores it in the config in "AxiosRequestConfig"
//in "AxiosRequestConfig", there is a prpoerty called "params" which is an query string parameters
//therefore, if I send the defined query like "params:{movie_id:10}"
//then, server read this query and call back the requested data
//and axios stores it in data in "AxiosResponse"
//eventually, I can access this information by using like
//const {data:{data:{movie}}} = axios.get(LIST_MOVIES_URL, {params:{movie_id:10}})

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(LIST_MOVIES_URL, {
    params: { limit, minimum_rating: rating },
  });
  return movies;
};

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios.get(MOVIE_DETALIS_URL, { params: { movie_id: id } });
  return movie;
};

export const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(MOVIE_SUGGESTION_URL, { params: { movie_id: id } });
  return movies;
};
