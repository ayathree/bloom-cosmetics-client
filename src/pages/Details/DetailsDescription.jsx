import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import Rating from "react-rating";

import { useLoaderData } from "react-router-dom";


const DetailsDescription = () => {
    const item = useLoaderData();
    const [quantity, setQuantity] = useState(1);
    return (
        <div>
            {/* first */}
            <div className="flex lg:flex-row flex-col justify-center items-start gap-10 mt-20">
        <div className="w-full flex justify-center">
            <img className="border-2 border-gray-300 h-[100vh]" src={item.Image} alt="" />
        </div>
        <div className="space-y-2 w-full">
        <p className=' bg-[#047857]  text-white p-1 px-2 font-semibold inline-block'>{item.Price}</p>
            <p className="text-black font-bold uppercase text-2xl">{item.ProductName}</p>
            <div className="flex flex-row justify-start items-start gap-2 ">
            <p className="text-black font-bold flex flex-row justify-center items-center gap-2">{item.CustomerReviewsAndRatings.Ratings} <div className="rating">
  <Rating
    initialRating={item.CustomerReviewsAndRatings.Ratings}
    readonly
    fullSymbol={<span className="text-[#047857] text-2xl">★</span>}
    emptySymbol={<span className="text-black text-2xl">☆</span>}
  />
</div></p>
<p>|</p>
<a href="" className="hover:underline">Read the Reviews</a>
            
            </div>
            <p className="text-neutral-500">{item.Description}</p>
            <p className="text-black font-bold">Quantity :</p>
           <div className="flex md:flex-row flex-col justify-start items-start gap-5 pb-4">
             {/* div 1 */}
             <div>
                {/* quantity box */}
            
            <div className="flex items-center gap-2">
           {/* Decrement Button */}
           <button 
  className={`bg-gray-300 text-black font-bold py-2 px-4 rounded ${quantity === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}
  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
  disabled={quantity === 1}
>
  -
</button>

      {/* Quantity Display */}
      <input 
  type="" 
  value={quantity} 
  onChange={(e) => setQuantity(Math.max(parseInt(e.target.value) || 1, 1))} 
  className=" w-12 text-center bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
/>

      {/* Increment Button */}
      <button 
        className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
        onClick={() => setQuantity((prev) => prev + 1)}
      >
        +
      </button>

            </div>
             </div>
             {/* div 2 */}
             <div>
                <button className="w-full bg-black text-white text-center p-2 px-20 hover:bg-[#047857]">Add To Bag</button>
             </div>
           </div>
           
           <button className="py-5 flex justify-center items-center gap-2 hover:underline font-bold text-xl"><BsStarFill className="text-[#047857]"></BsStarFill>Add to wishlist</button>
          
           <div className="py-5">
           <p className="text-black font-bold">Ingredients :</p>
           <p className="pb-2">{item.Ingredients}</p>
           </div>
           <hr className="border-1 border-[#047857] py-2 mt-5" />
           <p className="text-black font-bold">Brand : <span className="font-normal">{item.Brand}</span></p>
           <p className="text-black font-bold">Category : <span className="font-normal" >{item.Category}</span></p>

           
           
        </div>
    </div>
    {/* second */}
    <div>
       <p className="uppercase font-semibold text-4xl text-center mt-20">You may also like</p>
       
    </div>
        </div>
    );
};

export default DetailsDescription;