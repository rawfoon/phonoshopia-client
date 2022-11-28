import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllProducts from "../../Pages/AllProducts/AllProducts/AllProducts";
import ReportedProducts from "../../Pages/AllProducts/ReportedProducts/ReportedProducts";
import CategoryDetails from "../../Pages/CategoryDetails/CategoryDetails";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyOrder from "../../Pages/MyOrder/MyOrder";
import AddProducts from "../../Pages/Seller/AddProducts/AddProducts";
import MyProducts from "../../Pages/Seller/MyProducts/MyProducts";
import Signup from "../../Pages/SignUp/Signup";
import AllUsers from "../../Pages/Users/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/myorders',
                element: <PrivateRoute><MyOrder></MyOrder></PrivateRoute>
            },
            {
                path: '/category/:category',
                element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.category}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <AdminRoute><Dashboard></Dashboard></AdminRoute>
            },
           
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allproducts',
                element: <AdminRoute><AllProducts></AllProducts></AdminRoute>
            },
            {
                path: '/dashboard/reportedproducts',
                element: <AdminRoute><ReportedProducts></ReportedProducts></AdminRoute>
            },
        ]

    }
])