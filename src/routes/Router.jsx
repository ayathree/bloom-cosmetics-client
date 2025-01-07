import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/home/Home";
import Categorize from "../pages/Categorize";
import DetailsDescription from "../pages/Details/DetailsDescription";
import FeaturedItems from "../pages/FeaturedItems";
import OurCollection from "../pages/OurCollection";
import BrandList from "../pages/BrandList";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";


export const Router = createBrowserRouter ([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/categorize/:category',
                element:<Categorize></Categorize>,
                loader:({params})=>fetch(`http://localhost:5000/allProducts/${params.category}`)
            },
            {
                path:'/detailsDescription/:id',
                element:<DetailsDescription></DetailsDescription>,
                loader:({params})=>fetch(`http://localhost:5000/allProductsDetails/${params.id}`)
            },
            {
                path:'/featuredItems/:feature',
                element:<FeaturedItems></FeaturedItems>,
                loader:({params})=>fetch(`http://localhost:5000/allProductsFeature/${params.feature}`)

            },
            {
                path:'/ourCollection',
                element:<OurCollection></OurCollection>
            },
            {
                path:'/brandList',
                element:<BrandList></BrandList>
            },
            {
                path:'/aboutUs',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/contactUs',
                element:<ContactUs></ContactUs>
            }
        ]
    }
])

export default Router;