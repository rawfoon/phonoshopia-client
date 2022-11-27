import React,{useContext, useState} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Pages/Shared/Loading/Loading';

const AdminRoute = ({children}) => {
    const { user,  loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    // const [adminLoading, setAdminLoading] = useState(true)

    // let isAdmin = false
    // if(userFromDB && userFromDB.role === 'admin'){
    //     isAdmin = true
        
    // }
    // if(isAdmin){
    //     setAdminLoading(false)
    // }
    
    // console.log(isAdmin);
    // console.log('admin rout', userFromDB && userFromDB.role);

    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin ) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;