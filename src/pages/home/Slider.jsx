import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,  Navigation } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fade } from 'react-awesome-reveal';

AOS.init();

const Slider = () => {
    return (
        <div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
       
        // navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='bg-gray-200 bg-cover w-full h-[70vh] relative'>
            <img src="https://i.ibb.co.com/3MdL35y/post-05-370x450.jpg" className='absolute right-56 h-[70vh]' alt="" />
            <Fade>
            <div className='flex flex-col justify-start items-start gap-6 absolute left-5 bottom-32'
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
            >
                <p className='text-3xl font-bold uppercase text-[#065f46]'>New collection</p>
                <h1 className='text-6xl font-bold text-black'>Get The Skin
                    <br /> You Want To Feel</h1>
                </div>
            </Fade>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-gray-200 bg-cover w-full h-[70vh] relative'>
                <img src="https://i.ibb.co.com/mGsFZdM/other-image-05.jpg" className='absolute right-16 h-[70vh]' alt="" />
                <Fade>
                <div className='flex flex-col justify-start items-start gap-6 absolute left-5 bottom-32'
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
                
                >
                <p className='text-3xl font-bold uppercase text-[#065f46]'>the pearl glow</p>
                <h1 className='text-6xl font-bold text-black'>Let's Introduce The 
                    <br /> Shiny Skin</h1>
                </div>
                </Fade>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-gray-300 bg-cover w-full h-[70vh] relative' >
                <img src="https://i.ibb.co.com/yPWvvfd/other-image-04.jpg" className='absolute right-56 h-[70vh]' alt="" />
                <Fade>
                <div className='flex flex-col justify-start items-start gap-6 absolute left-5 bottom-32'
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
                
                >
                <p className='text-3xl font-bold uppercase text-[#065f46]'>Get the glow</p>
                <h1 className='text-6xl font-bold text-black'>Love Your Skin
                    <br /> Naturally</h1>
                </div>
                </Fade>
            </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
    );
};

export default Slider;