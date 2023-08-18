import {createBrowserRouter, Navigate} from "react-router-dom";
import Home from "./views/home";
import Login from "./views/login";
// import NotFound from "./views/NotFound";


const router = createBrowserRouter([
  {
    path: '',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  
])

export default router;














// {
//   path: "*",
//   element: <NotFound/>
// }