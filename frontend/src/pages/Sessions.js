import SessionCard from "../components/SessionCard";
import { useJwt } from "react-jwt";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import LoginToBook from "../components/LoginToBook";
import axios from "axios";
import { useAuth } from '../context/AuthContext';

const Sessions = () => {
  const { accessToken} = useAuth();
  const validToken = useJwt(accessToken, "maybegeneraterandomly");
  const email = validToken.decodedToken?.email;

  // In Enrollments table, find all rows where email=email
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const headers = { accessToken };
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/Api/sessions/${email}`, { headers });

        if (response.status === 200) {
          setEnrollments(response.data);
        } else {
          console.error('Failed to fetch enrollments');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      fetchEnrollments();
    }
  }, [accessToken, email]);

  if (!accessToken) return <LoginToBook />;

  return (
    !email || !enrollments || loading ? <Loading /> : (
      <div>
        {enrollments.map((enrollment) => (
          <div key={enrollment._id} className="about">
            <SessionCard {...enrollment} />
          </div>
        ))}
      </div>
    )
  );
};

export default Sessions;
