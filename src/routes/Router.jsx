import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/home/Home";
import Categorize from "../pages/Categorize";
import DetailsDescription from "../pages/DetailsDescription";


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
                path:'/detailsDescription',
                element:<DetailsDescription></DetailsDescription>
            }
        ]
    }
])

export default Router;