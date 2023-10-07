import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Categorydetails from "../Component/Categorydetails/Categorydetails";
import ErrorPage from "../Errorpage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
          errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home></Home>, 
                // loader: () => fetch('/news.json')
            }, 
            {
                path: '/category/:id', 
                element: <PrivateRoute><Categorydetails/></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }    
]);

export default router;