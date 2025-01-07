import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { GrView } from 'react-icons/gr';
import { FaRegStar } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const AlsoLike = ({item}) => {
    const [ setSwiperRef] = useState(null);
    const[reviewProducts, setReviewProducts]=useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/allProducts`)
            .then((res) => res.json())
            .then((data) => {
                const filteredProducts = data.filter(
                    (product) => product.CustomerReviewsAndRatings?.Ratings === item.CustomerReviewsAndRatings?.Ratings
                );
                setReviewProducts(filteredProducts);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setIsLoading(false);
            });
    }, [item]);
    if (isLoading) return <p>Loading...</p>;
    return (
        <div>
            
           
             <Swiper
             
             onSwiper={setSwiperRef}
             slidesPerView={4}
             
             spaceBetween={30}
             pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
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
         reviewProducts.slice(0,8).map((product)=>(
             <SwiperSlide key={product.id}>
                <div className='bg-slate-100 lg:h-[60vh] w-full h-[100vh] relative group border-2 border-gray-300'>
                            <img className='absolute' src={product.Image} alt="" />
                            <div className='absolute flex flex-row justify-center items-center gap-2 bg-[rgb(4,120,87)]  text-white p-1 px-3 top-4 left-3 font-semibold '><p>{product.CustomerReviewsAndRatings?.Ratings}</p><BsStarFill></BsStarFill></div>
                            <div className='absolute bg-yellow-400  text-white p-1 px-3 top-4 right-3 font-semibold opacity-0 group-hover:opacity-100  transition-all duration-500 ease-in-out '><p>{product.Price}</p></div>
                            <div className='absolute flex flex-row justify-center items-center gap-4 bottom-10 left-10 right-10 opacity-0 group-hover:opacity-100 group-hover:bottom-12 transition-all duration-500 ease-in-out  '>
                           <Link to={`/detailsDescription/${product._id}`}> <button className=' flex justify-center items-center   text-black bg-white px-6 py-2  border-black border-2 hover:border-white bottom-12  left-6 right-6 absolute lg:font-bold hover:bg-[#047857] hover:text-white uppercase opacity-0 group-hover:opacity-100 group-hover:bottom-12 transition-all duration-500 ease-in-out '>Details</button></Link>
                            
                            </div>
                            
                            </div>
            </SwiperSlide>
         ))
        }
       
        
      </Swiper>

      
            
            
        </div>
    );
};

export default AlsoLike;