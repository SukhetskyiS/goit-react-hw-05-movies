import { movieReviewApi } from 'API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Reviews.module.css';

const Reviews = () => {
  const [review, setReview] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const getReview = async () => {
      const data = await movieReviewApi(movieId);

      setReview(data.results);
    };

    getReview();
  }, [movieId]);

  return (
    <>
      <h2 className={css.title}>Reviews</h2>
      <ul>
        {review?.map(item => (
          <li key={item.id} className={css.list}>
            <p className={css.author}>Author: {item.author}</p>
            <p className={css.content}>{item.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
