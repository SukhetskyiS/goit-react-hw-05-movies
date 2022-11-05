import axios from 'axios';

const getApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '9785ea0de5536e01ad6fbbca1fd11246',
  },
});

export const getTrendingApi = async () => {
  const { data } = await getApi.get('/trending/movie/day');
  return data.results;
};

export const getMoviesByIdApi = async id => {
  const response = await getApi.get(`/movie/${id}`);
  return response.data;
};

export const searchApi = async params => {
  const { data } = await getApi('/search/movie', { params: params });
  return data;
};

export const movieCastsApi = async id => {
  const { data } = await getApi(`/movie/${id}/credits`);
  return data;
};

export const movieReviewApi = async id => {
  const { data } = await getApi.get(`/movie/${id}/reviews`);
  return data;
};
