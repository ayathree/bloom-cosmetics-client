import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Categorize = () => {
    const items = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Calculate total pages
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Get items for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="mt-20">
            {/* Grid Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10">
                {currentItems.map((item) => (
                    <div
                        key={item.id}
                       
                    >
                        <div  className="overflow-hidden group relative shadow-2xl">
                        <img
                            src={item.Image}
                            alt=""
                            className="w-full object-cover h-[60vh] transform transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full transition-all duration-500"></div>
                        <button className="text-black bg-white px-6 py-2  border-black border-2 hover:border-white bottom-12 lg:left-24 lg:right-24 left-16 right-16 absolute lg:font-bold hover:bg-[#047857] hover:text-white uppercase opacity-0 group-hover:opacity-100 group-hover:bottom-12 transition-all duration-1000 ease-in-out ">
                            details
                        </button>
                        </div>
                        <p className="text-center mt-8 text-xl font-semibold">{item.Price}</p>
                        <p className="text-center  font-semibold">{item.ProductName}</p>
                        
                    </div>
                    
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-8">
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

export default Categorize;
