import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            

            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    {/* Page content here */}
    <Outlet></Outlet>
    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {/* Sidebar content here*/}
     
      <li><Link to='/dashboard/myproducts'>My Products</Link></li>
      <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
    </ul>
  
  </div>
</div>
            
        </div>
    );
};

export default DashboardLayout;