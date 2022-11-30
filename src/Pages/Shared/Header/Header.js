
import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../Loading/Loading';

const Header = () => {
  const {user, userFromDB, dbUserLoading, logOut} = useContext(AuthContext)
  

  // if(dbUserLoading){
  //   return<Loading></Loading>
  // }

  // console.log('header', userFromDB && userFromDB.role)
  // const { } = userFromDB
  



  const handleLogout=()=>{
    logOut()
    .then(() => { })
      .catch(err => console.log(err));
  }
    
 


    return (
        <div className="navbar bg-base-100 ">
  <div className="navbar-start ">
    <div className="dropdown ">
      <label  tabIndex={1} className="btn btn-ghost lg:hidden">
       
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>

      {
      (userFromDB && userFromDB.role === 'buyer' ) &&

    <li><Link to='/myorders'>My Orders</Link></li>

     }        
     {
      (userFromDB && userFromDB.role === 'seller' ) &&

    <li><Link to='/dashboard/myproducts'>Dashboard</Link></li>

     }        


     {
     (userFromDB && userFromDB.role === 'admin' ) &&
      <li><Link to='/dashboard/allusers'>Dashboard</Link></li>
     
     }
  {user? 
      
      <li><Link to='' onClick={handleLogout}>Logout</Link></li>
      :
      <>
      <li><Link to='/login'>Login</Link> </li>
      <li><Link to='/signup'>Sign Up</Link></li>
      </>
}




        {/* <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li> */}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl md:text-2xl">Phono<span className='text-violet-400'>Shopia</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex ml-auto mr-5">
  <ul className="menu menu-horizontal  p-0">
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/blogs'>Blogs</Link></li>
     {
      (userFromDB && userFromDB.role === 'buyer' ) &&

    <li><Link to='/myorders'>My Orders</Link></li>

     }        
     {
      (userFromDB && userFromDB.role === 'seller' ) &&

    <li><Link to='/dashboard/myproducts'>Dashboard</Link></li>

     }        


     {
     (userFromDB && userFromDB.role === 'admin' ) &&
      <li><Link to='/dashboard/allusers'>Dashboard</Link></li>
     
     }
  {user? 
      
      <li><Link to='' onClick={handleLogout}>Logout</Link></li>
      :
      <>
      <li><Link to='/login'>Login</Link> </li>
      <li><Link to='/signup'>Sign Up</Link></li>
      </>
}

    </ul>
  </div>
  <label htmlFor="dashboard-drawer"  tabIndex={2} className="btn btn-ghost lg:hidden ml-auto">
       
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      
      </label>
  
</div>
    );
};

export default Header;