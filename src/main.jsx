import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import BrandPage from './components/BrandPage/BrandPage';
import ProductDetails from './components/ProductDetails/ProductDetails';
import AddProduct from './components/AddProduct/AddProduct';
import MyCart from './components/MyCart/MyCart';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader : () => fetch('/brand.json'),
     
      },
      {
        path:'/brand/:brandName',
        element:<BrandPage></BrandPage>,
        loader: ({params}) => fetch(`https://tech-info-server-side.vercel.app/products/brand/${params.brandName}`)
      },
      {
        path:'/:brandName/:productId',
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: () => fetch(`https://tech-info-server-side.vercel.app/products`)
      },
      {
        path:'/addProduct',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:'/myCart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('https://tech-info-server-side.vercel.app/carts')
      },
      {
        path:'/updateProduct/:id',
        element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(`https://tech-info-server-side.vercel.app/products/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
   
  </React.StrictMode>,
)
