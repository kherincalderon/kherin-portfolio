'use client';

import { useSwiper } from 'swiper/react';
import { GrPrevious, GrNext } from 'react-icons/gr';
const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <GrPrevious className={iconStyles} onClick={() => swiper.slidePrev()} />
      </button>
      <button className={btnStyles}>
        <GrNext className={iconStyles} onClick={() => swiper.slideNext()} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
