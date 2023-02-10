import { createBrowserRouter, useRoutes } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import BlogDetails from "../Pages/Blog/BlogDetails";
import Home from "../Pages/Home/Home/Home";
import HowWork from "../Pages/HowWorkThisSIte/HowWork";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'blog',
                element: <Blog />
            }, {
                path: 'blog/:title',
                element: <BlogDetails />
            },
           {
            path:"howitworks",
            element:<HowWork/>
           } 
        ]
    },
    {
        path:"tutor/dashboard",
        element:<DashboardLayout/>,
        children:[
            {
                path:"tutor/dashboard",
                element:<DashboardLayout/>
            }
        ]
    }
])
export default routes;