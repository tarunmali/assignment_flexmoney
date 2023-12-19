import {useState} from "react";
import { Routes, Route, Link, useNavigate, NavLink } from 'react-router-dom';
import LoginToBook from "../components/LoginToBook";


const Landingpage = () =>{
  const navigate = useNavigate();
    
    
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    
    const years = ['2023', '2024', '2025','2026','2027'];
    
    const [selectedSlot, setSelectedSlot] = useState(1);
    const [selectedMonth, setSelectedMonth] = useState('December');
    const [selectedYear, setSelectedYear] = useState('2023');
    
    const onBookSlot = () => {
        navigate('/payments',{
          state: { selectedYear: selectedYear, selectedMonth: selectedMonth, selectedSlot: selectedSlot }}
          );
      };
    
    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
      };
    
      const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
      };

      const handleSlotSelection = (slotNumber) => {
        setSelectedSlot(slotNumber);
      };


    return (
        // <div className="about">
        //     <h1>Landingpage</h1>
        // </div>
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">Yup Yoga🧘: The new way of life!!</h1>
        <div className="flex flex-row items-center">
        <div className="flex gap-10">
            {/* <button className="bg-green-500 text-white px-4 py-2 rounded w-40">
                Select Month
            </button>



            <button className="bg-blue-500 text-white px-4 py-2 rounded w-40">
                Select Year
          </button> */}

<label htmlFor="month">
        <button className="bg-blue-500 text-white px-4 py-2 rounded ">
          Select Month
        </button>
      </label>
      <select id="month" value={selectedMonth} onChange={handleMonthChange}>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      <label htmlFor="year">
        <button className="bg-blue-500 text-white px-4 py-2 rounded ">
          Select Year
        </button>
      </label>
      <select id="year" value={selectedYear} onChange={handleYearChange}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>


          </div>
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-4">"Indulge in heavenly experience once every month"</h2>
        <div className="flex flex-row justify-between w-full">
          {/* <button className="px-4 py-2 bg-gray-300 rounded-md">
            {"<"}
          </button>
          <span className="text-lg font-bold">{selectedMonth} {selectedYear}</span>
          <button className="px-4 py-2 bg-gray-300 rounded-md">
            {">"}
          </button> */}
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
            {/* <button >          
                <div className="text-center px-4 py-2 text-gray-500">
                <p>Slot 1</p>
                <p>6-7AM</p>
                </div>
            </button>

            <button>          
                <div className="text-center px-4 py-2 text-gray-500">
                <p>Slot 2</p>
            <p>7-8AM</p>
                </div>
            </button>

            <button>          
                <div className="text-center px-4 py-2 text-gray-500">
                <p>Slot 3</p>
            <p>8-9AM</p>
                </div>
            </button>

            <button>          
                <div className="text-center px-4 py-2 text-gray-500">
                <p>Slot 4</p>
            <p>5-6PM</p>
                </div>
            </button> */}
    
    
      <button onClick={() => handleSlotSelection(1)}>          
        <div className={`text-center px-4 py-2 ${selectedSlot === 1 ? 'bg-green-500 text-white' : 'text-gray-500'}`}>
          <p>Slot 1</p>
          <p>6-7AM</p>
        </div>
      </button>

      <button onClick={() => handleSlotSelection(2)}>          
        <div className={`text-center px-4 py-2 ${selectedSlot === 2 ? 'bg-green-500 text-white' : 'text-gray-500'}`}>
          <p>Slot 2</p>
          <p>7-8AM</p>
        </div>
      </button>

      <button onClick={() => handleSlotSelection(3)}>          
        <div className={`text-center px-4 py-2 ${selectedSlot === 3 ? 'bg-green-500 text-white' : 'text-gray-500'}`}>
          <p>Slot 3</p>
          <p>8-9AM</p>
        </div>
      </button>

      <button onClick={() => handleSlotSelection(4)}>          
        <div className={`text-center px-4 py-2 ${selectedSlot === 4 ? 'bg-green-500 text-white' : 'text-gray-500'}`}>
          <p>Slot 4</p>
          <p>5-6PM</p>
        </div>
      </button>



        </div>

        <p className="text-gray-500 mt-8">
          4 slots available this month.
        </p>

        <div class="flex space-y-4 mb-8">

            <button className="bg-green-500 text-white px-4 py-2 rounded w-48" onClick={onBookSlot}>
      Book Slot
        </button>

        </div>

        <div className="bg-blue-500 text-white p-4">
      <div className="flex items-center justify-between">
        {/* Image Section */}
        <div className="w-1/3">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
            alt="Banner Image"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="w-2/3 px-4 mt-8">
          <h1 className="text-3xl font-bold mb-2">Explore the Adventure</h1>
          <p className="text-lg mb-4">
            Embark on a journey of discovery and excitement. Uncover new places, meet incredible
            people, and create lasting memories that will stay with you forever.
          </p>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100">
            Learn More
          </button>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Landingpage;