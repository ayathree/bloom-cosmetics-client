
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { FiShoppingBag } from 'react-icons/fi';
import { GrView } from 'react-icons/gr';
import { FaRegStar } from 'react-icons/fa';
const Arrivals = () => {
    return (
        <div className="mt-20">
             <div>
                <p className="text-center mb-5 font-semibold text-4xl uppercase ">new arrivals</p>
                <p className="text-center mb-16 text-lg">Looking For Something Specific? Find Out Your Perfect <br /> Products   In New Arrivals</p>
            </div>
            <div className=''>
            <Swiper
       
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          // When the screen width is >= 0px (small screens)
          0: {
            slidesPerView: 1,
          },
          // When the screen width is >= 768px (medium screens)
          768: {
            slidesPerView: 2,
          },
          // When the screen width is >= 1024px (large screens)
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide><div className='bg-slate-100 h-[50vh] w-full relative'>
          <div className='absolute flex flex-row justify-center items-center gap-4 bottom-10 left-14 '>
          <FiShoppingBag className='text-2xl' />
          <GrView className='text-2xl' />
          <FaRegStar className='text-2xl' />
          </div>
          
          </div></SwiperSlide>
        <SwiperSlide><div className='bg-slate-100 h-[50vh] w-full'></div></SwiperSlide>
        <SwiperSlide><div className='bg-slate-100 h-[50vh] w-full'></div></SwiperSlide>
        <SwiperSlide><div className='bg-slate-100 h-[50vh] w-full'></div></SwiperSlide>
        <SwiperSlide><div className='bg-slate-100 h-[50vh] w-full'></div></SwiperSlide>
        <SwiperSlide><div className='bg-slate-100 h-[50vh] w-full'></div></SwiperSlide>
        <SwiperSlide><div className='bg-slate-100 h-[50vh] w-full'></div></SwiperSlide>
        <SwiperSlide><div className='bg-slate-100 h-[50vh] w-full'></div></SwiperSlide>
        <SwiperSlide><div className='bg-slate-100 h-[50vh] w-full'></div></SwiperSlide>
        <SwiperSlide><div className='bg-slate-100 h-[50vh] w-full'></div></SwiperSlide>
      </Swiper>
            </div>

            
        </div>
    );
};

export default Arrivals;