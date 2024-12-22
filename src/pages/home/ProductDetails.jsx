import { useState } from "react";

const ProductDetails = ({ product })  => {
    const [quantity, setQuantity] = useState(1);
    const {
        ProductName,
        Brand,
        Category,
        Feature,
        NewArrival,
        Ingredients,
        Price,
        Description,
        Image,
        CustomerReviewsAndRatings,
      } = product;
    return (
        <div className="flex lg:flex-row flex-col justify-center items-start gap-10">
        <div className="w-full">
            <img className="" src={Image} alt="" />
        </div>
        <div className="space-y-2 w-full">
        <p className=' bg-[#047857]  text-white p-1 px-2 font-semibold inline-block'>{Price}</p>
            <p className="text-black font-bold uppercase text-2xl">{ProductName}</p>
            <div className="flex flex-row justify-start items-start gap-2 ">
            <p className="text-black font-bold flex flex-row justify-center items-center gap-2">{CustomerReviewsAndRatings.Ratings} <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#047857] h-[16px]" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#047857] h-[16px]"  />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#047857] h-[16px]" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#047857] h-[16px]" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#047857] h-[16px]" />
</div></p>
<p>|</p>
<a href="" className="hover:underline">Read the Reviews</a>
            
            </div>
            <p className="text-neutral-500">{Description}</p>
            <p className="text-black font-bold">Quantity :</p>
           <div className="flex flex-row justify-start items-start gap-5 pb-4">
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
           
          
           <p className="text-black font-bold">Ingredients :</p>
           <p className="pb-2">{Ingredients}</p>
           <hr className="border-1 border-[#047857] pb-2 " />
           <p className="text-black font-bold">Brand : <span className="font-normal">{Brand}</span></p>
           <p className="text-black font-bold">Category : <span className="font-normal" >{Category}</span></p>

          
        </div>
    </div>
    
    );
};

export default ProductDetails;