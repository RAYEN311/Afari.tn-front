import {createBrowserRouter, Navigate} from "react-router-dom";
// import DefaultLayout from "./components/DefaultLayout";
import Home from "./views/home";
// import NotFound from "./views/NotFound";


const router = createBrowserRouter([
  {
    path: '',
    element: <Home/>
  },
  // {
  //   path: "*",
  //   element: <NotFound/>
  // }
  
])

export default router;
