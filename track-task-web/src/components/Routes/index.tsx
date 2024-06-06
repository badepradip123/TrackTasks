import path from "path";
import { useRoutes } from "react-router-dom";
import Login from "../Login/Login";
import { DEFAULT_ECDH_CURVE } from "tls";
import Layout from "../Pages/Layout";
import PrivateRoutes from "./PrivateRoute";
import Register from "../Login/Register";

const MainRoutes = () => {
  let routes = useRoutes([
    // {
    //   children:[]
    //   ,element:
    //   path:''
    // }
    {
      element: (
        <PrivateRoutes>
          <Layout />
        </PrivateRoutes>
      ),
      path: "/",
    },

    {
      element: <Login />,
      path: "/login",
    },
    {
      element: <Register />,
      path: "/signup",
    },
  ]);
  return routes;
};

export default MainRoutes;
