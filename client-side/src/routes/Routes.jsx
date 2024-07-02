import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import AddCraft from "../pages/AddCraft";
import UpdateCraft from "../pages/UpdateCraft";
import AllCrafts from "../pages/AllCrafts";
import CraftDetails from "../pages/CraftDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyCrafts from "../pages/MyCrafts";
import ErrorPage from "../pages/ErrorPage";
import SpecificCategory from '../pages/SpecificCategory';
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    const allCrafts1 = await fetch('https://craft-store-server.vercel.app/allcrafts');
                    const allCrafts = await allCrafts1.json();

                    const categories1 = await fetch('https://craft-store-server.vercel.app/subcategories');
                    const categories = await categories1.json();
                    
                    return { allCrafts, categories }
                }
            },
            {
                path: '/addcraft',
                element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute> 
            },
            {
                path: '/updatecraft/:id',
                element: <PrivateRoute><UpdateCraft></UpdateCraft></PrivateRoute>,
                loader: ({params})=>fetch(`https://craft-store-server.vercel.app/craft/${params.id}`)
            },
            {
                path: '/allcraft',
                element: <AllCrafts></AllCrafts>,
                loader: ()=>fetch('https://craft-store-server.vercel.app/allcrafts')
            },
            {
                path: '/craft/:id',
                element: <PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>,
                loader: ({params})=>fetch(`https://craft-store-server.vercel.app/craft/${params.id}`)
            },
            {
                path: '/specific/:category',
                element: <SpecificCategory></SpecificCategory>,
                loader: ({params})=>fetch(`https://craft-store-server.vercel.app/specific/${params.category}`)
            },
            {
                path: '/mycrafts',
                element: <PrivateRoute><MyCrafts></MyCrafts></PrivateRoute> ,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
]);

export default router;