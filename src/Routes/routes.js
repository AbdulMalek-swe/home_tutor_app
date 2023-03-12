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
import VerifyUser from "../Pages/UserForm/UserVerify/VerifyUser";
import ForgotPasswordNumber from "../Pages/UserForm/ForgotPassword/ForgotPasswordNumber";
import ForgotVerify from "../Pages/UserForm/ForgotPassword/ForgotVerify";
import StudentHomeDashboard from "../Pages/Dashboard/StudentDashboard/StudentHomeDashboard/StudentHomeDashboard";
import StudentProfile from "../Pages/Dashboard/StudentDashboard/StudentProfile/StudentProfile";
import StudentProfileEdit from "../Pages/Dashboard/StudentDashboard/StudentProfileEdit/StudentProfileEdit";

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
                path: "register",
                element: <Register />
            }, {
                path: "login",
                element: <Login />,

            },
            {
                path: "register/verify",
                element: <VerifyUser />
            },
            {
                path:"forget-password",
                element:<ForgotPasswordNumber/>
            }, {
                path:"forget-verify",
                element:<ForgotVerify/>
            }

        ]
    },
    {
        path: "tutor",
        element: <div><Main /><DashboardLayout /></div>,
        children: [{
            path: "/tutor",
            element: <div><DashboardHome />   </div>
        },
        {
            path: "/tutor/profile",
            element: <TutorProfile />
        }
        ],

    },
    {
        path:"student",
        element:<div> <Main/> <DashboardLayout/></div>,
        children:[
            {
                path:"/student",
                element:<StudentHomeDashboard/>
            },
            {
                path:"/student/profile",
                element:<StudentProfile/>
            },
            {
                path:"/student/profile/edit",
                element:<StudentProfileEdit/>
            }
        ]
    }
])
export default routes;