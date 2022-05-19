// Import Swiper React components
import { ChatBubbleOutlineOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Card from './component/Card';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
// how make swiper responsive

breakpoints={{
  // when window width is >= 320px
  320: {
    width: 320,
    slidesPerView: 1,
  },
  // when window width is >= 640px
  640: {
    width: 640,
    slidesPerView: 1,
  },
  // when window width is >= 768px
  768: {
    width: 768,
    slidesPerView: 3,
  },
}}


    >
    <SwiperSlide>
      <Card />
    </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide> 
    </Swiper>
  );
};