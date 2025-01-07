import { useEffect, useState } from "react";


const Featured = () => {
     const[featureProducts,setFeatureProducts]=useState([]);
          
          useEffect(()=>{
            fetch(`http://localhost:5000/features`)
            .then(res=> res.json())
            .then(data=>setFeatureProducts(data))
          },[])

    return (
        <div className="mt-20">
             <div className="flex justify-center items-center mb-4">

<img className="h-[100px]" src="https://i.ibb.co.com/gzmxyFJ/6075201.png" alt=""  />
</div>
            <div>
                <p className="text-center mb-5 font-semibold text-4xl uppercase ">Featured Collections</p>
                <p className="text-center mb-16 text-lg">Best Products, Everyone's Favorite.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:grid-rows-2 md:grid-rows-3 grid-rows-6 justify-center items-center gap-4">
                {
                    featureProducts.map((feature)=>(
                        <div key={feature.id} className="overflow-hidden group relative">
                    <img src={feature.image} className="w-full object-cover h-[60vh] transform transition-transform duration-300 hover:scale-110" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full transition-all duration-500"></div>
                    <button className="text-black bg-white px-6 py-2  border-black border-2 bottom-12 left-24 right-24 absolute  lg:font-bold hover:bg-[#047857] hover:border-white hover:text-white uppercase opacity-0 group-hover:opacity-100 group-hover:bottom-12 transition-all duration-1000 ease-in-out">{feature.name}</button>
                </div>
                    ))
                }
               
            </div>
            
        </div>
    );
};

export default Featured;