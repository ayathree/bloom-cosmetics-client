
const ProductDetails = ({ product })  => {
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
            <div className="flex flex-row justify-start items-start gap-2">
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
        </div>
    </div>
    
    );
};

export default ProductDetails;