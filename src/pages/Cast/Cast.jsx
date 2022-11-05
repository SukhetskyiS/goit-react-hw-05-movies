import { movieCastsApi } from 'API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const data = await movieCastsApi(movieId);

      setCast(data.cast);
    };

    getCast();
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul className={css.list}>
          {cast?.map(({ id, profile_path, name }) => (
            <li key={id} className={css.item}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725120-stock-illustration-image-available-icon-flat-vector.jpg'
                }
                alt={name}
                width="60"
              />
              <p className={css.text}>{name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
