
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
        <div>
        
        <img className="w-full h-auto mb-4 uppercase" src={Image} alt={ProductName} />
        <h2 className="text-2xl text-white font-bold m-4">{ProductName}</h2>
        <p className="mb-4 text-white uppercase ">{Description}</p>
        
        
        <h3 className="font-semibold mt-5 lg:mt-0 mb-2 text-white flex  justify-start items-start text-lg uppercase underline ">Features:</h3>
        <ul className="list-disc list-inside mb-4 text-start  ">
        <p className="text-white">{CustomerReviewsAndRatings.Ratings}</p>
       
          {CustomerReviewsAndRatings.Reviews.map((Review, index) => (
            <li className="text-white " key={index}>{Review}</li>
          ))}
        </ul>
        <h3 className="font-semibold mb-2 text-white flex  justify-start items-start text-lg uppercase underline ">Used Technologies:</h3>
         
      </div>
    );
};

export default ProductDetails;