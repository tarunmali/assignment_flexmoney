import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useJwt } from "react-jwt";
import { useQuery } from 'react-query';
import Loading from '../components/Loading';
import LoginToBook from "../components/LoginToBook";


const Payments = () =>{
    const location = useLocation();
    const propsFromNavigate = location.state;
    const { selectedYear, selectedMonth, selectedSlot } = propsFromNavigate;
    const [paymentStatus, setPaymentStatus] = useState('');
    const accessToken=sessionStorage.getItem('accessToken');
    const validToken = useJwt(accessToken, "maybegeneraterandomly");
    // console.log(validToken.decodedToken.frontendEmail);
    let email;
    if(validToken.decodedToken!=null){
        email=validToken.decodedToken.email;
        }    

      let selectedSlotDetails;
      if(selectedSlot==1){
        selectedSlotDetails="6:00 AM - 7:00 AM";
      }
      else if(selectedSlot==2){
        selectedSlotDetails="7:00 AM - 8:00 AM";
      }
      else if(selectedSlot==3){
        selectedSlotDetails="8:00 AM - 9:00 AM";
      }
      else if(selectedSlot==4){
        selectedSlotDetails="5:00 PM - 6:00 PM";
      }

      const [isLoading, setIsLoading] = useState(false);

    //change the style of code
    const handlePayment = async () => {
      try {
        setIsLoading(true);
        // Call the backend API to process the payment
        const response= await fetch(`${process.env.REACT_APP_BACKEND}/Api/payments`,{
        // const response = await fetch('/Api/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            selectedYear,
            selectedMonth,
            selectedSlot,
            email,
            amount: 500,
          }),
        })
        const data = await response.json();
  
        // Update the payment status based on the API response
        setPaymentStatus(data.success ? 'Payment successful!' : 'Payment failed.');
      } catch (error) {
        // console.error('Error processing payment:', error);
        setPaymentStatus('An error occurred while processing the payment.');
      }
      finally {
        setIsLoading(false);
      }

    };
  
    if(isLoading)   return <Loading/>

    return   !sessionStorage.getItem('accessToken') ?(
      <LoginToBook/>
    )
     :(
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4">💵Secure Payments: Powered by Flexmoney🥈</h2>
      <p className="my-4">Selected Year: {selectedYear}</p>
      <p className="my-4">Selected Month: {selectedMonth}</p>
      <p className="my-4">Selected Slot: {selectedSlotDetails}</p>
      <p className="my-4">Email: {email}</p>

        <p className="mb-4">Price: 500 Rupees</p>
        
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
          onClick={handlePayment}
        >
          Process Payment
        </button>
  
        {paymentStatus && (
          <p className={`mt-4 ${paymentStatus.includes('failed') ? 'text-red-500' : 'text-green-500'}`}>
            {paymentStatus}
          </p>
        )}
      </div>  
    )
}

export default Payments;