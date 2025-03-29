import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Error from "./Error.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Landing from "./pages/Landing.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import CreateAuction from "./components/CreateAuction.jsx";
import MyAuction from "./pages/MyAuction.jsx";
import Product from "./pages/Product.jsx";
import EmailVerification from "./pages/EmailVerification.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/verify-email/:token",
    element: <EmailVerification />,
  },
  {
    path: "/auction",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "", // This will match /auction exactly
        element: <Dashboard />,
      },
      {
        path: "create", // This will match /auction/create
        element: <CreateAuction />,
      },
      {
        path: "user/:userId", // This will match /auction/user/:userId
        element: <MyAuction />,
      },
      {
        path: ":productId", // This will match /auction/:productId
        element: <Product />,
      },
    ],
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password/:token",
    element: <ResetPassword />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);



