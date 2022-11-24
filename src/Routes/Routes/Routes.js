import { createBrowserRouter } from "react-router-dom"
import Main from "../../layout/Main"
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import Dashboard from "../../pages/DashBoard/dashboard/Dashboard";
import Home from "../../pages/Home/Home/Home"
import Login from "../../pages/Login/Login";
import Signup from "../../pages/SignUp/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children : [
            {
                path: '/', 
                element: <Home></Home>
            } , 
            {
                path: '/login', 
                element: <Login></Login>
            } , 
            {
                path: '/signup', 
                element: <Signup></Signup>
            } , 
            {
                path:'/appointment', 
                element: <PrivateRoute><Appointment></Appointment></PrivateRoute>
            } , 
            
        ]
    } , 
    {
        path: "/dashboard", 
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])
export default router;