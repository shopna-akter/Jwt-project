import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Errorpage from './Component/ErrorPage/Errorpage';
import AuthProvider from './Provider/AuthProvider';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AddFood from './Component/AddFood/AddFood';
import PrivateRoute from './Component/Route/PrivateRoute';
import ManageMyFood from './Component/ManageFood/ManageFood';
import AvailabaleFoods from './Component/AvailableFoods/AvailabaleFoods';
import UpdateFood from './Component/UpdateFood/UpdateFood';
import FoodDetails from './Component/FoodDetails/FoodDetails';
import MyFoodRequest from './Component/MyFoodRequest/MyFoodRequest';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/Register',
        element: <Register></Register>
      },
      {
        path: '/Login',
        element: <Login></Login>
      },
      {
        path: '/AddFood',
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path: '/ManageMyFood',
        element: <PrivateRoute><ManageMyFood></ManageMyFood></PrivateRoute>,
        loader: () => fetch('https://assignment-p11-server.vercel.app/foods')
      },
      {
        path: '/AvailableFoods',
        element: <AvailabaleFoods></AvailabaleFoods>,
        loader: () => fetch('https://assignment-p11-server.vercel.app/availableFoods')
      },
      {
        path: '/updateFood/:id',
        element: <UpdateFood></UpdateFood>,
        loader: ({params}) => fetch(`https://assignment-p11-server.vercel.app/foods/${params.id}`)
      },
      {
        path: '/Foods/:id',
        element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
        loader: () => fetch('https://assignment-p11-server.vercel.app/foods')
      },
      {
        path: '/MyFoodRequest',
        element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>
      }
    ]
  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
