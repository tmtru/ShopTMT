import React, { useMemo } from 'react';
import SvgStarIcon from '../common/SvgStarIcon';
import { SvgEmptyStar } from '../common/SvgEmptyStar';

const Rating = ({ rating }) => {
  const ratingNumber = useMemo(() => {
    const validRating = Number(rating);
    if (isNaN(validRating)) {
      return [];
    }
    return Array(Math.floor(validRating)).fill();
  }, [rating]);

  const emptyStars = new Array(5 - ratingNumber.length).fill();

  return (
    <div className='d-flex align-items-center mb-2'>
      {ratingNumber?.map((_, index) => (
        <SvgStarIcon key={index} />
      ))}
      {emptyStars.map((_, index) => (
        <SvgEmptyStar key={'empty-' + index} />
      ))}
      <div className='px-2 text-gray-500'>{rating}</div>
    </div>
  );
};

export default Rating;
