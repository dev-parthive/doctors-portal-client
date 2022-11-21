import { createBrowserRouter } from "react-router-dom"
import Main from "../../layout/Main"
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import Home from "../../pages/Home/Home/Home"
import Login from "../../pages/Login/Login";


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
                path:'/appointment', 
                element: <Appointment></Appointment>
            }
        ]
    }
])
export default router;