import Arrivals from "./Arrivals";
import Category from "./Category";
import Featured from "./Featured";
import Slider from "./Slider";


const Home = () => {
    return (
        <div className="mt-6">
           <Slider></Slider>
           <Featured></Featured>
           <Category></Category>
           <Arrivals></Arrivals>
        </div>
    );
};

export default Home;