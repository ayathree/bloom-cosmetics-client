import { useLoaderData } from "react-router-dom";


const DetailsDescription = () => {
    const item = useLoaderData();
    return (
        <div>
            <img src={item.Image} alt="" />
            
        </div>
    );
};

export default DetailsDescription;