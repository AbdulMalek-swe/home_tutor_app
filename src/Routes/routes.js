import { createBrowserRouter, useRoutes } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import BlogDetails from "../Pages/Blog/BlogDetails";
import TutorProfile from "../Pages/Dashboard/TutorProfileDashboard/TutorProfile";
import Home from "../Pages/Home/Home/Home";
import HowWork from "../Pages/HowWorkThisSIte/HowWork";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome"
import Register from "../Pages/UserForm/Register/Register";
import Login from "../Pages/UserForm/Login/Login";
 
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
                path: "howitworks",
                element: <HowWork />
            },
            {
                path:"register",
                element:<Register/>,
                 
            },{
                path:"login",
                element:<Login/>,
                 
            }
             
        ]
    },
    {
        path:"tutor",
        element:<div><Main/><DashboardLayout/></div>,
        children: [{
            path:"/tutor",
            element:<div><DashboardHome/>   </div>
        },
        {
            path:"/tutor/profile",
            element:<TutorProfile/>
        }
    ],

    }
])
export default routes;