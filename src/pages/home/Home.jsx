import { useEffect, useState } from "react";
import Arrivals from "./Arrivals";
import Category from "./Category";
import Featured from "./Featured";
import Slider from "./Slider";
import Subscription from "./Subscription";
import { RxCross1 } from "react-icons/rx";
import ProductDetails from "./ProductDetails";


const Home = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    useEffect(() => {
        if (selectedProduct) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
    
        return () => document.body.classList.remove("overflow-hidden");
      }, [selectedProduct]);
    return (
        <div className="mt-6 relative">
             
            {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          {/* Modal Content */}
          <div className="relative bg-white text-black p-6 w-11/12 md:w-3/4 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute  top-3 right-3 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
              onClick={() => setSelectedProduct(null)}
            >
              <RxCross1 />
            </button>

            {/* Project Details */}
            <ProductDetails product={selectedProduct} />
          </div>
        </div>
      )}
           <Slider></Slider>
           <Featured></Featured>
           <Arrivals setSelectedProduct={setSelectedProduct}></Arrivals>
           <Category></Category>
           <Subscription></Subscription>
        </div>
    );
};

export default Home;