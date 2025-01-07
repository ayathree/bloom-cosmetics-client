import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/home/Home";
import Categorize from "../pages/Categorize";
import DetailsDescription from "../pages/Details/DetailsDescription";
import FeaturedItems from "../pages/FeaturedItems";


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

            }
        ]
    }
])

export default Router;