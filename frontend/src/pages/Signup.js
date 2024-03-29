import React, { useState } from "react";
import signuppage from "../assets/images/signuppic.svg";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import confetti from "canvas-confetti";

function Signup(props) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const [ageError, setAgeError] = useState("");
  const [emailError, setEmailError] = useState("");

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "age") {
      const ageValue = parseInt(value, 10);

      if (isNaN(ageValue) || ageValue < 18 || ageValue > 65) {
        setAgeError("Age must be between 18 and 65.");
      } else {
        setAgeError("");
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    let { name, email, age, phone, password, confirmpassword } = user;

    const postData = {
      name,
      email,
      phone,
      password,
      confirmpassword,
      age,
    };

    // Check if all required details are filled
    const areDetailsFilled = Object.values(postData).every(
      (value) => value !== undefined && value !== ""
    );

    if (!areDetailsFilled) {
      window.alert("Please fill in all details.");
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND}/Api/signup`,
          postData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response);

        const data = response.data;
        const status = response.status;

        if (status === 200) {
          window.alert("Successfully registered");

          confetti({
            particleCount: 600,
            spread: 180,
          });

          navigate("/login");
        } else {
          // Check for specific error cases
          if (data && data.error) {
            window.alert(data.error);
          } else {
            // Handle unexpected status codes
            console.error("Unexpected status code:", status);
          }
        }
      } catch (error) {
        // Handle network or other errors
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error(
            "Server responded with non-2xx status:",
            error.response.status
          );
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received from server");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error setting up the request:", error.message);
        }
      }
    }
  };

  return (
    <div>
      <section className="signup flex flex-col items-center">
        <div className="signup-content bg-white rounded-lg shadow-md w-full md:w-1/2 px-8 py-10 mt-5">
          <h2 className="text-2xl font-bold mb-8 text-center">Sign up</h2>
          <form method="POST" className="flex flex-col gap-y-4">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-base font-medium mb-1 text-left"
              >
                Your Name
                <i className="zmdi zmdi-account material-icons-name ml-2"></i>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={user.name}
                onChange={handleInputs}
                className="w-full rounded px-3 py-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="email"
                className="flex items-center mb-1 text-base font-medium"
              >
                <i className="zmdi zmdi-email material-icons-name mr-2"></i>
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={user.email}
                onChange={handleInputs}
                className="w-full rounded px-3 py-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
              {emailError && <p className="text-red-500">{emailError}</p>}
            </div>

            <div className="form-group">
              <label
                htmlFor="age"
                className="flex items-center mb-1 text-base font-medium"
              >
                <i className="zmdi zmdi-age material-icons-name mr-2"></i>
                Your Age
              </label>
              <input
                type="number"
                name="age"
                id="age"
                placeholder="Your age"
                value={user.age}
                onChange={handleInputs}
                className="w-full rounded px-3 py-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
              {ageError && <p className="text-red-500">{ageError}</p>}
            </div>

            <div className="form-group">
              <label
                htmlFor="phone"
                className="flex items-center mb-1 text-base font-medium"
              >
                <i className="zmdi zmdi-phone material-icons-name mr-2"></i>
                Your phone
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Your phone"
                value={user.phone}
                onChange={handleInputs}
                className="w-full rounded px-3 py-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your password"
                  value={user.password}
                  onChange={handleInputs}
                  autoComplete="off"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <i className="zmdi zmdi-lock material-icons-name text-gray-500"></i>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label
                htmlFor="confirmpassword"
                className="flex items-center mb-1 text-base font-medium"
              >
                <i className="zmdi zmdi-lock material-icons-name mr-2"></i>
                Confirm your password
              </label>
              <input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Confirm your password"
                value={user.confirmpassword}
                onChange={handleInputs}
                className="w-full rounded px-3 py-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="flex flex-col">
              <button
                type="submit"
                name="signup"
                id="signup"
                className="px-4 py-2 rounded bg-blue-500 text-white font-medium hover:bg-blue-600"
                onClick={PostData}
              >
                Register
              </button>
            </div>
          </form>

          <NavLink
            to="/Login"
            className="text-base font-medium mt-4 hover:underline text-center"
          >
            I am already registered
          </NavLink>

          <div />

          <div className="signup-image flex flex-col items-center mt-8">
            <figure>
              <img src={signuppage} alt="signup image" />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
