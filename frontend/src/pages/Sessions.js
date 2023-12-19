import SessionCard from "../components/SessionCard";
import { useJwt } from "react-jwt";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import LoginToBook from "../components/LoginToBook";
import axios from "axios";
import { useNavigate, Link} from "react-router-dom";
import { useQuery } from 'react-query';
const fetcher= url => fetch(url).then(res => res.json());


const Sessions = () =>{
    const accessToken=sessionStorage.getItem('accessToken');
    const validToken = useJwt(accessToken, "maybegeneraterandomly");
    let email;
    if(validToken.decodedToken!=null){
        email=validToken.decodedToken.email;
        }
    
    //In Enrolllments table, find all rows where email=email
    const [enrollments, setEnrollments] = useState([]);


    // useEffect(() => {
    //   axios.get(`${process.env.REACT_APP_BACKEND}/Api/sessions/${email}`).then((response) => {
    //     setEnrollments(response.data);
    //   });

    // }, [email]);


    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get(`${process.env.REACT_APP_BACKEND}/Api/sessions/${email}`);
    //       setEnrollments(response.data);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
  
    //   fetchData();
    // }, [email]);




    // const {isLoading, data}=useQuery('get',()=>fetcher(`${process.env.REACT_APP_BACKEND}/Api/sessions/${email}`))
    // console.log(data);
    // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchEnrollments = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_BACKEND}/Api/sessions/${email}`);
          if (response.ok) {
            const data = await response.json();
            setEnrollments(data);
          } else {
            console.error('Failed to fetch enrollments');
          }
        } catch (error) {
          console.error('Error during fetch:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchEnrollments();
    }, [email]);



    if(!sessionStorage.getItem('accessToken')) return <LoginToBook/>
    
    return (
    !email|| !enrollments || loading?<Loading />:(<div >
                {enrollments.map((enrollment) => (
                     <div key={enrollment._id} className="about">
                    <SessionCard {...enrollment} />
                    </div>
                ))}
             </div>)

    )
}

export default Sessions;