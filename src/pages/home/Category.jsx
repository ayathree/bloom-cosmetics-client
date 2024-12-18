

const Category = () => {
    return (
        <div className="mt-20">
            <div>
                <div className="flex justify-center items-center">

                <img src="https://i.ibb.co.com/Gk5Kzdh/image-box-01.png" alt=""  />
                </div>
                <p className="text-center mb-5 font-semibold text-4xl uppercase ">Shop by Categories</p>
                <p className="text-center mb-16 text-lg">Because You Need Time for Yourself. <br /> Blend Beauty in You</p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 grid-rows-4 lg:grid-rows-2 md:grid-rows-3 justify-center items-center gap-4">
                <div className=" lg:row-span-2 relative overflow-hidden group">
                    <img src="https://i.ibb.co.com/rkQNHCr/Home2-blog-single-img-1.jpg" className="lg:w-full lg:h-[105vh] object-cover h-[450px] transform transition-transform duration-300 hover:scale-110" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full transition-all duration-500"></div>
                    <button className="text-black bg-white px-6 py-2  bottom-20 lg:left-32 left-40 absolute font-bold hover:bg-black hover:text-white">MakeUps</button>
                </div>
                <div className="relative overflow-hidden group">
                    <img src="https://i.ibb.co.com/VMt0wN6/banner-18.jpg" className="lg:h-[50vh] lg:w-full object-cover h-[450px] transform transition-transform duration-300 hover:scale-110" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full transition-all duration-500"></div>
                    <button className="text-black bg-white px-6 py-2  bottom-20 left-40 absolute font-bold hover:bg-black hover:text-white">SkinCare</button>
                </div>
                <div className="relative overflow-hidden group">
                    <img src="https://i.ibb.co.com/Jr8pnXj/banner-15.jpg" className="lg:h-[50vh] lg:w-full object-cover h-[450px] transform transition-transform duration-300 hover:scale-110" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full transition-all duration-500"></div>
                    <button className="text-black bg-white px-6 py-2  bottom-20 left-40 absolute font-bold hover:bg-black hover:text-white">BodyCare</button>
                </div>
                <div className="lg:col-span-2 relative overflow-hidden group">
                    <img src="https://i.ibb.co.com/DMGKZk5/banner-17.jpg" className="lg:h-[50vh] lg:w-full object-cover h-[450px] transform transition-transform duration-300 hover:scale-110" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full transition-all duration-500"></div>
                    <button className="text-black bg-white px-6 py-2  bottom-16 lg:left-96 left-40 absolute font-bold hover:bg-black hover:text-white">HairCare</button>
                </div>
            </div>
            
        </div>
    );
};

export default Category;