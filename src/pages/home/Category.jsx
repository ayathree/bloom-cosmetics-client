

const Category = () => {
    return (
        <div className="mt-20">
            <div>
                <p className="text-center mb-5 font-bold text-4xl ">Shop by Categories</p>
                <p className="text-center mb-16 text-lg">Best products, designed for everyone.</p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 grid-rows-4 lg:grid-rows-2 md:grid-rows-3 justify-center items-center gap-4">
                <div className=" lg:row-span-2 relative">
                    <img src="https://i.ibb.co.com/rkQNHCr/Home2-blog-single-img-1.jpg" className="lg:w-full lg:h-[105vh] object-cover h-[450px]" alt="" />
                    <button className="text-black bg-white px-6 py-2  bottom-20 lg:left-32 left-40 absolute font-bold hover:bg-black hover:text-white">MakeUps</button>
                </div>
                <div className="relative">
                    <img src="https://i.ibb.co.com/VMt0wN6/banner-18.jpg" className="lg:h-[50vh] lg:w-full object-cover h-[450px]" alt="" />
                    <button className="text-black bg-white px-6 py-2  bottom-20 left-40 absolute font-bold hover:bg-black hover:text-white">SkinCare</button>
                </div>
                <div className="relative">
                    <img src="https://i.ibb.co.com/Jr8pnXj/banner-15.jpg" className="lg:h-[50vh] lg:w-full object-cover h-[450px]" alt="" />
                    <button className="text-black bg-white px-6 py-2  bottom-20 left-40 absolute font-bold hover:bg-black hover:text-white">BodyCare</button>
                </div>
                <div className="lg:col-span-2 relative">
                    <img src="https://i.ibb.co.com/DMGKZk5/banner-17.jpg" className="lg:h-[50vh] lg:w-full object-cover h-[450px]" alt="" />
                    <button className="text-black bg-white px-6 py-2  bottom-16 lg:left-96 left-40 absolute font-bold hover:bg-black hover:text-white">HairCare</button>
                </div>
            </div>
            
        </div>
    );
};

export default Category;