import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WithdrawalPage = () => {
  // Define separate state variables for each input field.
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation of inputs
    if (!userName.trim()) {
      setError("Please enter your username.");
      return;
    }
    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }
    if (!accountNumber || accountNumber.trim().length < 5) {
      setError("Please enter a valid account number.");
      return;
    }
    // Assuming phone numbers should have at least 10 digits
    if (!phoneNumber || phoneNumber.trim().length < 10) {
      setError("Please enter a valid phone number.");
      return;
    }
    if (!verificationCode || verificationCode.trim().length !== 6) {
      setError("Please enter a valid 6-digit verification code.");
      return;
    }

    setError('');

    // Build the payload
    const payload = {
      userName,
      password,
      accountNumber,
      phoneNumber,
      verificationCode
    };

    try {
      // Use DELETE method to match your backend route
      const res = await fetch("/api/stopfundraising", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include", // Include cookies if your auth relies on them
        body: JSON.stringify(payload)
      });
      
      const data = await res.json();
      if (res.ok) {
        alert("Fundraising Stopped");
        navigate("/homepage");
      } else {
        setError(data.error || "Withdrawal failed. Please try again.");
      }
    } catch (err) {
      console.error("Error during withdrawal:", err);
      setError("An error occurred during withdrawal. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Withdraw Funds</h2>
       
        {error && <p className="mb-4 text-red-500">{error}</p>}
        
        <div className="mb-4">
          <label htmlFor="userName" className="block text-gray-700">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="accountNumber" className="block text-gray-700">
            Account Number
          </label>
          <input
            type="number"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700">
            Phone Number
          </label>
          <input
            type="number"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="verificationCode" className="block text-gray-700">
            Verification Code
          </label>
          <input
            type="number"
            id="verificationCode"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Withdraw
        </button>
      </form>
    </div>
  );
};

export default WithdrawalPage;
