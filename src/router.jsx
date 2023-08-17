import {createBrowserRouter, Navigate} from "react-router-dom";
// import DefaultLayout from "./components/DefaultLayout";
import Home from "./views/home";
import WaitScreen from "./views/wait_screen";
// import NotFound from "./views/NotFound";


const router = createBrowserRouter([
  {
    path: '',
    element: <Home/>
  },
  
])

export default router;














// {
//   path: "*",
//   element: <NotFound/>
// }