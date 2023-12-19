import React, { useState } from 'react';
import signinpic from './images/signinpic.svg';
import { Routes, Route, Link, useNavigate, NavLink } from 'react-router-dom';
// import zxcvbn from 'zxcvbn';

function Login(props) {
  const navigate = useNavigate();
  // const[isLoggedin,setIsLoggedin]=useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // let result=zxcvbn(user.password)

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { email,  password} = user;

    const response = await fetch(`${process.env.REACT_APP_BACKEND}/Api/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    //This is how the fetch api works
    const data1 = await response.json();
    const data2 = response.status;

    const errata = data1.error;

    if (data2 === 200) {
    //   console.log(data1.accessToken);
      window.alert('Successfully login');
      sessionStorage.setItem("accessToken",data1.accessToken);
      navigate('/');
      window.location.reload();
    } else {
      window.alert(errata);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <section className="bg-gray-100 w-full px-8 py-16 rounded-lg md:flex md:space-x-8 lg:w-1/2">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-8">Log in</h2>
          <form method="POST" className="space-y-4">
            <div className="flex items-center">
              <i className="mr-2 text-blue-500 zmdi zmdi-email material-icons-name"></i>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={user.email}
                onChange={handleInputs}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500 outline-none"
              />
            </div>
            <div className="flex items-center">
              <i className="mr-2 text-blue-500 zmdi zmdi-lock material-icons-name"></i>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                value={user.password}
                onChange={handleInputs}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500 outline-none"
                autoComplete="off"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                name="signin"
                id="signin"
                value="Log In"
                onClick={PostData}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                Log In
              </button>
              <NavLink
                to="/Signup"
                className="text-blue-500 hover:underline"
              >
                Register now
              </NavLink>
            </div>
          </form>
        </div>
        <div className="hidden md:block">
          <figure>
            <img src={signinpic} alt="Signin image" />
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Login;
