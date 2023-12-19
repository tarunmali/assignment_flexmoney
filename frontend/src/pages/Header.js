import { Link } from "react-router-dom";
import { useJwt } from "react-jwt";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { accessToken, setAccessToken } = useAuth();
  const navigate = useNavigate();

  const Logout = () => {
    navigate("/");
    sessionStorage.removeItem("accessToken");
    setAccessToken(null);
    window.location.reload();
  };


  const validToken = useJwt(accessToken, "maybegeneraterandomly");
  let frontendEmail;
  if (validToken.decodedToken != null) {
    frontendEmail = validToken.decodedToken.email;
  }

  return (
    <div className="flex justify-between bg-pink-50 shadow-xl   sm:bg-purple-50">
      <div className="nav-items">
        <ul className="flex py-10 ">
          <Link to="/">
            <li className="px-2">Home🏠</li>
          </Link>

          <Link to="/contact">
            <li className="px-2">Contact Us📞</li>
          </Link>

          <Link to="/about">
            <li className="px-2">About❓</li>
          </Link>

          {!accessToken && (
            <Link to="/login">
              <li className="px-2">Login 📥</li>
            </Link>
          )}

          {!accessToken && (
            <Link to="/signup">
              <li className="px-2">Signup 📮</li>
            </Link>
          )}

          {accessToken && (
            <Link to="/sessions">
              <li className="px-2">My Sessions 📃</li>
            </Link>
          )}
        </ul>
      </div>

      {accessToken && (
        <div className="nav-items">
          <ul className="flex py-3 "></ul>

          <span>
            <span className="inline-block font-bold bg-gray-100 rounded-r px-2 text-indigo-500">
              Welcome!!!
            </span>
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
      )}
    </div>
  );
};

export default Header;
