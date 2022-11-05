import { SearchForm } from 'components/SearchForm/SearchForm';
import { searchApi } from 'API/API';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import css from './Movies.module.css';

const Movies = () => {
  const [movie, setMovie] = useState(null);
  const [params, setParams] = useSearchParams();
  const location = useLocation();

  let query = params.get('query') || '';

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      const data = await searchApi({ query });
      setMovie(data.results);
    };
    getData();
  }, [query]);

  const getFormData = data => {
    setParams({ query: data });
  };

  return (
    <>
      <SearchForm getFormData={getFormData} />
      {movie && (
        <ul>
          {movie?.map(item => (
            <li key={item.id}>
              <Link
                to={`${item.id}`}
                state={{ from: location }}
                id={item.id}
                className={css.movieLink}
              >
                {item.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
