import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Contribution = () => {
  const {id,patientName}=useParams();  //getting patient id from URL 
console.log(id,patientName);

  const [patientID, setPatientID] = useState(id);
  const [pname, setPname] = useState(patientName);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  
  const navigate = useNavigate();

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedPayment) {
      alert("Please select a payment method");
      return;
    }
    
    // Prepare the payload with the form data
    const payload = {
      PatientID:Number(patientID),
      PNAME: pname,
      Name: name,
      Amount: parseFloat(amount)
    };

    try {
      const response = await fetch('/api/contribute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert('Transaction Completed');
        navigate('/homepage'); // Redirect after successful contribution
      } else {
        const data = await response.json();
        alert(`Error: ${data.error || "Transaction failed"}`);
      }
    } catch (error) {
      console.error("Error in contribution:", error);
      alert('Internal server error');
    }
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="w-96 pb-12 pr-4 pl-12 ring ring-black rounded-md shadow-2xl shadow-black">
          <p className="font-black text-4xl font-serif text-center mt-6">Contribute</p>
          <form onSubmit={handleSubmit}>
            <label className="text-xl font-serif mt-6">Patient ID :</label>
            <input
              className="rounded-md ring ring-black w-[290px] h-[30px] mb-4"
              type="number"
              value={patientID}
              onChange={(e) => setPatientID(e.target.value)}
              required
            />
            
            <label className="text-xl font-serif">Patient Name :</label>
            <input
              className="rounded-md ring ring-black w-[290px] h-[30px] mb-4"
              type="text"
              value={pname}
              onChange={(e) => setPname(e.target.value)}
              required
            />
            
            <label className="text-xl font-serif">Your Name :</label>
            <input
              className="rounded-md ring ring-black w-[290px] h-[30px] mb-4"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            
            <label className="text-xl font-serif">Amount :</label>
            <input
              className="rounded-md ring ring-black w-[290px] h-[30px] mb-4"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            
            <label className="text-xl font-serif">Select payment method :</label>
            <br />
            <input
              type="radio"
              name="payment"
              value="phonepay"
              checked={selectedPayment === 'phonepay'}
              onChange={handlePaymentChange}
            />
            <label>Phone pay </label>
            <br />
            <input
              type="radio"
              name="payment"
              value="googlepay"
              checked={selectedPayment === 'googlepay'}
              onChange={handlePaymentChange}
            />
            <label>Google pay </label>
            <br />
            <input
              type="radio"
              name="payment"
              value="NEFT"
              checked={selectedPayment === 'NEFT'}
              onChange={handlePaymentChange}
            />
            <label>NEFT </label>
            <br />
            <input
              type="radio"
              name="payment"
              value="other"
              checked={selectedPayment === 'other'}
              onChange={handlePaymentChange}
            />
            <label>Other </label>
            <br />
            <button
              className="bg-blue-700 text-white font-bold rounded-3xl w-[290px] h-[35px] mt-6 mx-auto"
              type="submit"> Contribute
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contribution;
