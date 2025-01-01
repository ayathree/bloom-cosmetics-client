

const Featured = () => {
    return (
        <div className="mt-20">
            <div>
                <p className="text-center mb-5 font-semibold text-4xl uppercase ">Featured Collections</p>
                <p className="text-center mb-16 text-lg">Best Products, Everyone's Favorite.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:grid-rows-2 md:grid-rows-3 grid-rows-6 justify-center items-center gap-4">
                <div className="overflow-hidden group relative">
                    <img src="https://i.ibb.co.com/qY9pDqG/Blog-Sidebar-Read-next-post-01.jpg" className="w-full object-cover h-[60vh] transform transition-transform duration-300 hover:scale-110" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full transition-all duration-500"></div>
                    <button className="text-black bg-white px-6 py-2  border-black border-2 bottom-12 left-24 right-24 absolute  lg:font-bold hover:bg-[#047857] hover:border-white hover:text-white uppercase opacity-0 group-hover:opacity-100 group-hover:bottom-12 transition-all duration-1000 ease-in-out">Lipsticks</button>
                </div>
                <div className="overflow-hidden group relative">
                    <img src="https://i.ibb.co.com/87hqdJw/port-featured-img-15.jpg" alt="" className="w-full object-cover h-[60vh] transform transition-transform duration-300 hover:scale-110" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full transition-all duration-500"></div>
                    <button className="text-black bg-white px-6 py-2  border-black border-2 bottom-12 left-24 right-24 absolute  lg:font-bold hover:bg-[#047857] hover:border-white hover:text-white uppercase opacity-0 group-hover:opacity-100 group-hover:bottom-12 transition-all duration-1000 ease-in-out">Eye shadows</button>
                </div>
                <div className="overflow-hidden group relative">
                    <img src="https://i.ibb.co.com/RbwJtLS/162044866-494105921752427-2053151397308435679-n.jpg" alt="" className="w-full object-cover h-[60vh] transform transition-transform duration-300 hover:scale-110" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full transition-all duration-500"></div>
                    <button className="text-black bg-white px-6 py-2  border-black border-2 bottom-12 lg:left-24 lg:right-24 left-16 right-16  absolute  lg:font-bold hover:bg-[#047857] hover:border-white hover:text-white uppercase opacity-0 group-hover:opacity-100 group-hover:bottom-12 transition-all duration-1000 ease-in-out">foundations</button>
                </div>
                <div className="overflow-hidden group relative">
                    <img src="https://i.ibb.co.com/zQ93X2S/drop-down-img-1.jpg" alt="" className="w-full object-cover h-[60vh] transform transition-transform duration-300 hover:scale-110" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full transition-all duration-500"></div>
                    <button className="text-black bg-white px-6 py-2  border-black border-2 bottom-12 lg:left-24 lg:right-24 left-16 right-16 absolute  lg:font-bold hover:bg-[#047857] hover:border-white hover:text-white uppercase opacity-0 group-hover:opacity-100 group-hover:bottom-12 transition-all duration-1000 ease-in-out">Mascaras</button>
                </div>
                <div className="overflow-hidden group relative">
                    <img src="https://i.ibb.co.com/FwMFzSP/161007137-818106462117352-2772674974349771071-n.jpg" alt="" className="w-full object-cover h-[60vh] transform transition-transform duration-300 hover:scale-110" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full transition-all duration-500"></div>
                    <button className="text-black bg-white px-6 py-2  border-black border-2 bottom-12 left-24 right-24 absolute lg:font-bold hover:bg-[#047857] hover:border-white hover:text-white uppercase opacity-0 group-hover:opacity-100 group-hover:bottom-12 transition-all duration-1000 ease-in-out">body mists</button>
                </div>
                <div className="overflow-hidden group relative">
                    <img src="https://i.ibb.co.com/x6NBH3K/Home1-blog-list-single-2-650x867.jpg" alt="" className="w-full object-cover h-[60vh] transform transition-transform duration-300 hover:scale-110" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full transition-all duration-500"></div>
                    <button className="text-black bg-white px-6 py-2  border-black border-2 bottom-12 left-24 right-24 absolute lg:font-bold hover:bg-[#047857] hover:border-white hover:text-white uppercase opacity-0 group-hover:opacity-100 group-hover:bottom-12 transition-all duration-1000 ease-in-out">MakeUp Kits</button>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;