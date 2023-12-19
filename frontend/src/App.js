import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './pages/Header';
import Landingpage from './pages/Landingpage';
import Footer from './pages/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';
import 'dotenv/config';
import Payments from "./pages/Payments";
import Sessions from "./pages/Sessions";

const App=()=>{
    return (
        <div >
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Landingpage/>
            },
            {
                path: "/about",
                element: <About/> 
             },
             {
                path: "/contact",
                element: <Contact/>
             },

             {
                path: "/signup",
                element: <Signup/>
             },

             {
                path: "/login",
                element: <Login/>
             },

             {
                path: "/payments",
                element: <Payments/>
             },

             {
                path: "/sessions",
                element: <Sessions/>
             },

        ]
    },

]);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);