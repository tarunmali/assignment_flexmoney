// SessionCard component displays slot details and payment ID
const SessionCard = ({ slotId, paymentId }) => {
    const pattern = /^(\d{4})([a-zA-Z]+)(\d+)$/;
    const match = pattern.exec(slotId);
  

  
    const year = match[1];
    const monthName = match[2].charAt(0).toUpperCase() + match[2].slice(1).toLowerCase();
    const slotNumber = match[3];
  

    let selectedSlotDetails = "";
    switch (parseInt(slotNumber)) {
      case 1:
        selectedSlotDetails = "6:00 AM - 7:00 AM";
        break;
      case 2:
        selectedSlotDetails = "7:00 AM - 8:00 AM";
        break;
      case 3:
        selectedSlotDetails = "8:00 AM - 9:00 AM";
        break;
      case 4:
        selectedSlotDetails = "5:00 PM - 6:00 PM";
        break;
      default:
        selectedSlotDetails = "Invalid slot selection.";
    }
  
    return (
    //   <div className="rounded-lg p-4 mb-4 bg-blue-200 w-3/4">
    //     <div>
    //     <h2 className="text-lg font-bold mb-2">
    //       Slot Details:
    //       <br />
    //       Year: {year}
    //       <br />
    //       Month: {monthName}
    //       <br />
    //       Slot Number: {slotNumber}
    //     </h2>
    //     <p>Payment ID: {paymentId}</p>
    //     {/* Ensure conditional rendering only displays slot time if selectedSlot has a valid value */}
    //     {selectedSlotDetails && <p>Slot Time: {selectedSlotDetails}</p>}
    //     </div>

    //     <div>
    //         <p>Instructor details</p>
            
    //     </div>

    //     <div>   
    //         <p>Location detail</p>
    //     </div>


    //   </div>

<div className="rounded-lg p-4 mb-4 bg-blue-200 w-3/4 flex">

        <div className="w-1/3 pr-4">
        <h2 className="text-lg font-bold mb-2">
            Slot Details:
            <br />
            Year: {year}
            <br />
            Month: {monthName}
            <br />
            Slot Number: {slotNumber}
        </h2>
        <p>Payment ID: {paymentId}</p>
        {selectedSlotDetails && <p>Slot Time: {selectedSlotDetails}</p>}
        </div>

        <div className="w-1/3 pr-4">
  {/* <p>Instructor details</p> */}
  
        <div className="flex items-center mb-4">
            <img
            src="data:image/jpeg;base64,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"
            alt="Instructor Photo"
            className="rounded-full h-16 w-16 mr-4"
            />
            <div>
            <p className="text-lg font-bold">Instructor</p>
            <p >Yashesh Juneja</p>
            <p>Mobile: {1234567890}</p>
            <p>Instructor ID: 0073</p>
            </div>
        </div>
        
        </div>

        <div className="w-1/3">
  <p className="text-lg font-bold">Location detail and Map</p>

  <div className="flex items-center mt-4">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3N03X1N6-6M9GtGa2zdBn8MyLkeBHlNNrX804EK5Zz4bwI04GRjIcMeoHUSAIPq0JqQ&usqp=CAU"
      alt="Mock Map"
      className="w-32 h-32 mr-4 rounded-md"
    />
    <div>
      {/* <p className="text-lg font-bold">Mock Address</p> */}
      <p>S-2 Flat, 5th Street</p>
      <p>Narendra House Apartment Block</p>
      <p>12 Balrampur</p>
    </div>
  </div>
</div>

        </div>


    );
  };
  
  export default SessionCard;