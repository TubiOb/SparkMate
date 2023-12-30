import { createBrowserRouter } from "react-router-dom";
import { SignIn, SignUp, ForgotPassword } from "./modules";
import { HomePage } from "./pages";

const Router = createBrowserRouter([

  {
    path: "auth",
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      }, 
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    
     
    ],
  },

  {
    path: "/",
    element: <HomePage />,
  },



]);

export default Router;