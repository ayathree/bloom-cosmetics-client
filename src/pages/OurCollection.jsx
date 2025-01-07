import { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";


const OurCollection = () => {
    const [allProducts, setAllProducts]= useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    useEffect(()=>{
        fetch(`http://localhost:5000/allProducts`)
            .then(res=> res.json())
            .then(data=>setAllProducts(data))
    },[])

    // Calculate total pages
    const totalPages = Math.ceil(allProducts.length / itemsPerPage);

    // Get items for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = allProducts.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="space-y-20">
            <div className="mt-10">
                <p className="text-center mb-5 font-semibold text-4xl uppercase ">Our Collections</p>
            </div>

            <p className="text-xl text-gray-500">We found <span className="font-bold text-black">{allProducts.length}</span> products available for you</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-16">
            {
                currentItems.map((item)=>(
                    <div
                        key={item.id} className=""
                       
                    >
                        <div  className="overflow-hidden group relative shadow-md">
                        <img
                            src={item.Image}
                            alt=""
                            className="w-full object-cover h-[60vh] transform transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full transition-all duration-500"></div>
                        {
                            item.NewArrival == "yes" && <p className="absolute bg-yellow-400 text-white p-1 px-3 top-4 left-3 font-semibold ">New</p>
                        }
                        
                        <Link to={`/detailsDescription/${item._id}`}><button className="text-black bg-white px-6 py-2  border-black border-2 hover:border-white bottom-12  left-16 right-16 absolute lg:font-bold hover:bg-[#047857] hover:text-white uppercase opacity-0 group-hover:opacity-100 group-hover:bottom-12 transition-all duration-1000 ease-in-out ">
                            details
                        </button></Link>
                        </div>
                        <p className="text-center mt-8 text-xl font-semibold">{item.Price}</p>
                        <p className="text-center  font-semibold">{item.ProductName}</p>
                        
                        <div  className="flex flex-row justify-center items-center gap-2">
                            <p>Ratings: </p>
                            <p className="font-semibold text-[#047857]">{item.CustomerReviewsAndRatings.Ratings}</p>
                        <Rating
  initialRating={item.CustomerReviewsAndRatings.Ratings}
  readonly
  fullSymbol={<span className="text-[#047857] text-2xl">★</span>}
  emptySymbol={<span className="text-black text-2xl">☆</span>}
/>

                        </div>
                        

                        
                        
                    </div>
                ))
            }
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-20">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 mx-2 bg-[#047857] text-white hover:bg-gray-300 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Previous
                </button>
                <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 mx-2 bg-[#047857] text-white hover:bg-gray-300 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>

            
        </div>
    );
};

export default OurCollection;