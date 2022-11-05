import { Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMoviesByIdApi } from '../../API/API';
import { useEffect, useState } from 'react';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieItem, setMovieItem] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;

    const getMovie = async () => {
      const data = await getMoviesByIdApi(movieId);

      setMovieItem(data);
    };

    getMovie();
  }, [movieId]);

  return (
    <>
      <Link to={location.state?.from ?? '/'}>← Go back</Link>

      <div>
        {movieItem && (
          <div>
            <h1 className={css.title}>{movieItem.original_title}</h1>
            <h2>{movieItem.release_data}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
              width="300px"
              alt=""
            />
            <p className={css.text}>User score:{movieItem.popularity}</p>
            <h2 className={css.titleText}>Overview </h2>
            <p className={css.text}>{movieItem.overview}</p>
            <h2 className={css.titleText}>Genres</h2>
            <p className={css.text}>
              {movieItem?.genres?.map(genre => (
                <li className={css.list} key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </p>
            <p className={css.text}>Additional information</p>
            <ul>
              <li className={css.list}>
                <Link to="cast" state={{ from: location?.state?.from }}>
                  Cast
                </Link>
              </li>

              <li className={css.list}>
                <Link to="reviews" state={{ from: location?.state?.from }}>
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
