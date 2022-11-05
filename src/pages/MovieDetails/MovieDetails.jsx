import { Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMoviesByIdApi } from 'API/API';
import { useEffect, useState } from 'react';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;

    const getMovie = async () => {
      const data = await getMoviesByIdApi(movieId);

      setMovie(data);
    };

    getMovie();
  }, [movieId]);

  return (
    <>
      <Link to={location.state?.from ?? '/'}>← Go back</Link>

      <div>
        {movie && (
          <div>
            <h1 className={css.title}>{movie.original_title}</h1>
            <h2>{movie.release_data}</h2>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725120-stock-illustration-image-available-icon-flat-vector.jpg'
              }
              width="300px"
              alt=""
            />
            <p className={css.text}>User score:{movie.popularity}</p>
            <h2 className={css.titleText}>Overview </h2>
            <p className={css.text}>{movie.overview}</p>
            <h2 className={css.titleText}>Genres</h2>
            <p className={css.text}>
              {movie?.genres?.map(genre => (
                <li className={css.list} key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </p>
            <p className={css.text}>Additional information</p>
            <ul>
              <li className={css.list}>
                <Link
                  className={css.linkText}
                  to="cast"
                  state={{ from: location?.state?.from }}
                >
                  Cast
                </Link>
              </li>
              <li className={css.list}>
                <Link
                  className={css.linkText}
                  to="reviews"
                  state={{ from: location?.state?.from }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieDetails;
