
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { FiShoppingBag } from 'react-icons/fi';
import { GrView } from 'react-icons/gr';
import { FaRegStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';
const Arrivals = () => {
  const[newArrivals,setNewArrivals]=useState([]);
  useEffect(()=>{
    fetch('50_products_with_ids.json')
    .then(res=> res.json())
    .then(data=>
      {
        const filteredData = data.filter(product => product.NewArrival === "yes");
      setNewArrivals(filteredData)
      })
  },[])
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
        {
          newArrivals.map((product)=>(
            <SwiperSlide key={product.id}><div className='bg-slate-100 lg:h-[50vh] w-full h-[100vh] relative group'>
            <img className='absolute' src={product.Image} alt="" />
            <div className='absolute bg-[#047857]  text-white p-1 px-3 top-4 left-3 font-semibold'><p>{product.Price}</p></div>
            <div className='absolute flex flex-row justify-center items-center gap-4 bottom-10 left-10 right-10 opacity-0 group-hover:opacity-100 group-hover:bottom-12 transition-all duration-500 ease-in-out  '>
            <button className='btn-circle bg-[#047857] flex justify-center items-center hover:bg-black text-white'><FiShoppingBag className='text-2xl ' /></button>
            <button className='btn-circle bg-[#047857] flex justify-center items-center hover:bg-black text-white'><GrView className='text-2xl' /></button>
           <button className='btn-circle bg-[#047857] flex justify-center items-center hover:bg-black text-white'> <FaRegStar className='text-2xl' /></button>
            </div>
            
            </div></SwiperSlide> 
          ))
        }
        
      </Swiper>
            </div>

            
        </div>
    );
};

export default Arrivals;