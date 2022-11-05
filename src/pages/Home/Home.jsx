import { getTrendingApi } from 'API/API';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getTrendingApi();

      setMovies(data);
    };

    getData();
  }, []);

  return (
    <>
      <h2 className={css.title}>Trending today</h2>
      <ul className={css.homeList}>
        {movies?.map(({ original_title, id }) => (
          <li className={css.list} key={id}>
            <Link to={`movies/${id}`} className={css.homeLink}>
              <p className={css.text}>{original_title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
