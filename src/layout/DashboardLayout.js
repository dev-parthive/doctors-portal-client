import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  console.log(isAdmin)
    return (
        <div>
            <Navbar></Navbar>
            <div  style={{
            background: '#0000ff29', 

        }} className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  ">
    {/* <!-- Page content here --> */}
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard">My appointments</Link></li>
      {
        isAdmin && <>
        
        <li><Link to="/dashboard/users">All users </Link></li>
        <li><Link to="/dashboard/adddoctor">Add Doctor</Link></li>
        <li><Link to="/dashboard/managedoctors">Manage Doctor</Link></li>
        </>
      }
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;