import React from "react";
import "./App.css";

import MainRoutes from "./components/Routes";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <div>
      <MainRoutes />
      <ToastContainer limit={1} autoClose={1000} position="top-center" />
    </div>
  );
};

export default App;
