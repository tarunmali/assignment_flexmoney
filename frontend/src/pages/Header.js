import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useJwt } from "react-jwt";
import { Routes, Route, Link, useNavigate, NavLink } from 'react-router-dom';


const Header = () =>{
    const navigate = useNavigate();
    
    const Logout = () => {
        navigate('/');
        sessionStorage.removeItem('accessToken');
        window.location.reload();
      }

    const accessToken=sessionStorage.getItem('accessToken');
    const validToken = useJwt(accessToken, "maybegeneraterandomly");
    // console.log(validToken.decodedToken.email);
    let frontendEmail;
    if(validToken.decodedToken!=null){
        frontendEmail=validToken.decodedToken.email;
        }

    return (
        <div className="flex justify-between bg-pink-50 shadow-xl   sm:bg-purple-50" >
        {/* <div className="logo">
            <a href="/">
                <img 
                className="h-24 p-2"
                // src={LOGO_URL} 
                alt="" />
            </a>

        </div> */}
        

        <div className='nav-items'>
            <ul
            className="flex py-10 ">

                <Link to="/">
                    <li className="px-2"  >Home🏠</li>
                </Link>

                {/* <Link to="/about">
                    <li className="px-2">About Us</li>
                </Link> */}

                <Link to="/contact">
                <li className="px-2">Contact Us📞</li>
                </Link>

                <Link to="/about">
                <li className="px-2">About❓</li>
                </Link>
                
                {/* <Link to="/instamart">
                <li className="px-2">Technologies Used💻</li>
                </Link> */}


            {!sessionStorage.getItem('accessToken')     &&
                <Link to="/login">
                <li className="px-2">Login 📥</li>
                </Link>}

            {!sessionStorage.getItem('accessToken')     &&
            <Link to="/signup">
                <li className="px-2">Signup 📮</li>
                </Link>}



                {sessionStorage.getItem('accessToken')     &&
            <Link to="/sessions">
                <li className="px-2">My Sessions 📃</li>
                </Link>}






            </ul>
        </div>




        

        {
                sessionStorage.getItem('accessToken')
                 &&(
                  
                   <div className='nav-items'>
                 <ul
                className="flex py-3 "></ul>
 

            <span >
            <span className="inline-block font-bold bg-gray-100 rounded-r px-2 text-indigo-500">Welcome!!!</span>
            <span className="ml-2">{frontendEmail}</span>
            </span>              
                    <span> </span>
            <button
                onClick={Logout}
                className="bg-red-300 hover:bg-red-400 text-white px-4 py-2 rounded-full"
                >
                Logout
                </button>

                  </div>
                )
              }


    </div>
    )
}

export default Header;