const FakePaymentForm = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Fake Payment Page</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Card Number
        </label>
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Enter card number"
        />
      </div>

      <div className="mb-4 flex items-center">
        <label className="block text-sm font-medium text-gray-600 mr-2">
          Expiry Date
        </label>
        <input type="text" className="border p-2 w-1/2" placeholder="MM/YY" />
        <span className="mx-2">/</span>
        <input type="text" className="border p-2 w-1/2" placeholder="CVV" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Card Holder Name
        </label>
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Enter card holder name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Payment Method
        </label>
        <div className="flex items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/800px-Visa_Inc._logo.svg.png" alt="Visa" className="h-8 mr-2" />
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2225761257/display_1500/stock-vector-humpolec-czech-republic-october-mastercard-credit-money-card-plastic-debit-icon-2225761257.jpg"
            alt="Mastercard"
            className="h-8 mr-2"
          />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MIi0H8wi-yitpribGaf_xOJRLWUsMmV-KAchI2IBQ00XwPIUaIQDRf-8YvKATR1kJBw&usqp=CAU" alt="UPI" className="h-8" />
        </div>
      </div>

      {/* <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Make Payment
      </button> */}
    </div>
  );
};

export default FakePaymentForm;
