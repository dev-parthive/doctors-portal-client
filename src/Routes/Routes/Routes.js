import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main"
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import AllUser from "../../pages/DashBoard/All user/AllUser";
import Dashboard from "../../pages/DashBoard/dashboard/Dashboard";
import MyAppointment from "../../pages/DashBoard/MyAppointment/MyAppointment";
import Home from "../../pages/Home/Home/Home"
import Login from "../../pages/Login/Login";
import Signup from "../../pages/SignUp/Signup";
import AdminRoute from "../AdminRoutes/AdminRoute";
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
        element: <PrivateRoute>
            <DashboardLayout>
            
            </DashboardLayout>
            </PrivateRoute>, 
            children: [
                {
                    path: '/dashboard', 
                    element: <MyAppointment></MyAppointment>
                } , 
                {
                    path: '/dashboard/users', 
                    element: <AdminRoute><AllUser></AllUser></AdminRoute>
                }
            ]
    }
])
export default router;