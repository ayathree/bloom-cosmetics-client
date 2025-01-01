import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Category = () => {
    const[categoryProducts,setCategoryProducts]=useState([]);
      
      useEffect(()=>{
        fetch(`http://localhost:5000/categories`)
        .then(res=> res.json())
        .then(data=>setCategoryProducts(data))
      },[])
    return (
        <div className="mt-20">
            <div>
                <div className="flex justify-center items-center">

                <img src="https://i.ibb.co.com/Gk5Kzdh/image-box-01.png" alt=""  />
                </div>
                <p className="text-center mb-5 font-semibold text-4xl uppercase ">Shop by Categories</p>
                <p className="text-center mb-16 text-lg">Because You Need Time for Yourself. <br /> Blend Beauty in You</p>
            </div>
            
            <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 grid-rows-4 lg:grid-rows-2 md:grid-rows-2 justify-center items-center gap-4">
            {categoryProducts.map((category) => (
                <div
                    key={category.id}
                    className={`${category.rowSpan} relative overflow-hidden group`}
                >
                    <img
                        src={category.image}
                        className={`${category.heightClass} lg:w-full object-cover h-[450px] transform transition-transform duration-300 hover:scale-110`}
                        alt=""
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full transition-all duration-500"></div>
                    <Link to={`/categorize/${category.name}`}><button className="text-black uppercase lg:text-2xl bg-white px-6 py-2 lg:py-6 border-black border-2 bottom-12 left-20 right-20 lg:left-56 lg:right-56 absolute font-bold hover:bg-[#047857] hover:border-white hover:text-white opacity-0 group-hover:opacity-100 group-hover:bottom-12 transition-all duration-1000 ease-in-out">
                        {category.name}
                    </button></Link>
                </div>
            ))}
        </div>
            
        </div>
    );
};

export default Category;