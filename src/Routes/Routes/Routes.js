import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main"
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../pages/DashBoard/AddDoctor/AddDoctor";
import AllUser from "../../pages/DashBoard/All user/AllUser";
import Dashboard from "../../pages/DashBoard/dashboard/Dashboard";
import ManageDoctors from "../../pages/DashBoard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../pages/DashBoard/MyAppointment/MyAppointment";
import Payment from "../../pages/DashBoard/Payment/Payment";
import Home from "../../pages/Home/Home/Home"
import Login from "../../pages/Login/Login";
import DisplayError from "../../pages/Shared/DisplyaError/DisplayError";
import Signup from "../../pages/SignUp/Signup";
import AdminRoute from "../AdminRoutes/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError> ,  
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
            errorElement: <DisplayError></DisplayError> , 
            children: [
                {
                    path: '/dashboard', 
                    element: <MyAppointment></MyAppointment>
                } , 
                {
                    path: '/dashboard/users', 
                    element: <AdminRoute><AllUser></AllUser></AdminRoute>
                } , 
                {
                    path: '/dashboard/adddoctor',
                    element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
                },
                {
                    path: '/dashboard/managedoctors',
                    element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
                } , 
                {
                    path: '/dashboard/payment/:id', 
                    element: <Payment></Payment> , 
                    loader: ({params}) => fetch(`https://doctors-portal-server-mu-five.vercel.app/bookings/${params.id}`)
                }
            ]
    }
])
export default router;