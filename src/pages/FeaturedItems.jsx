import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const FeaturedItems = () => {
    const items = useLoaderData();
    
    return (
        <div>
            {
                items.map((item)=>(
                    <div key={item.id}>
                        <img src={item.Image} alt="" />

                    </div>
                ))
            }
            
            
        </div>
    );
};

export default FeaturedItems;