import Arrivals from "./Arrivals";
import Category from "./Category";
import Featured from "./Featured";
import Slider from "./Slider";
import Subscription from "./Subscription";


const Home = () => {
    return (
        <div className="mt-6">
           <Slider></Slider>
           <Featured></Featured>
           <Category></Category>
           <Arrivals></Arrivals>
           <Subscription></Subscription>
        </div>
    );
};

export default Home;