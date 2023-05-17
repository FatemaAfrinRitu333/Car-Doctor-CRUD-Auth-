import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Home/Register/Register";
import Checkout from "../Pages/Checkout/Checkout";
import Error from "../Pages/Error/Error";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: 'checkout/:id',
        element: <Checkout />,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
          path: '/bookings',
          element: <PrivateRoute><Bookings /></PrivateRoute>,
      },
    ]
  },
]);

export default router;