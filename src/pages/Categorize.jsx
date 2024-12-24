import { useLoaderData } from "react-router-dom";


const Categorize = () => {
    const items = useLoaderData();
    console.log(items)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5">
            {
                items.map((item)=>(
                    <div key={item.id} className="overflow-hidden group relative border-black border-2">
                    <img src={item.Image} alt="" className="w-full object-cover h-[60vh] transform transition-transform duration-300 hover:scale-110" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full transition-all duration-500"></div>
                    <button className="text-black bg-white px-6 py-2  border-black border-2 bottom-12 lg:left-24 lg:right-24 left-16 right-16  absolute  lg:font-bold hover:bg-black hover:text-white uppercase">{item.ProductName}</button>
                </div>
                ))
            }

            
        </div>
    );
};

export default Categorize;