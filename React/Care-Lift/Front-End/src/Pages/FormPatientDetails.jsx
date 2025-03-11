import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import leftArrow from '../assets/Images/left arrow.svg';

const FormPatientDetails = () => {

  const location= useLocation();
  const navigate = useNavigate();

  const {fundraisername,amount,relation} =location.state || {}
 
  const [patientname, setPatientName] = useState("");
  const [patientage, setPatientAge] = useState("");
  const [medicalcondition, setMedicalCondition] = useState("");
  const [hospitalstatus, setHospitalStatus] = useState("");
  const [hospitalname, setHospitalName] = useState("");
  const [city, setCity] = useState("");
  const [patientimage, setPatientImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

     navigate('/formtestimony',
      {state:{fundraisername,amount,relation,patientname,patientage,medicalcondition,
        hospitalstatus,hospitalname,city,patientimage}}
     )
  };

  return (
    <div className="bg-stone-300 min-h-screen flex justify-center items-center p-6">
        {/* Back Button */}
        <Link to='/formfundraiser' className="flex items-center mb-5 text-gray-700 hover:text-gray-900">
        <img className="w-6 mr-2" src={leftArrow} alt="Back" />
          <p className="text-lg">Back</p>
        </Link>
        
       {/* Main box */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-[600px]">
        <p className="text-center text-3xl text-red-900 font-serif mb-6">Tell us about Patient</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className=" font-semibold">Patient Name</label>
            <input className="w-full p-2 rounded border border-gray-400 " 
              type="text" value={patientname} onChange={(e) => setPatientName(e.target.value)} required/>
          </div>

          <div>
            <label className=" font-semibold">Patient Age</label>
            <input className="w-full p-2 rounded border border-gray-400 "  
              type="number" value={patientage} onChange={(e) => setPatientAge(e.target.value)} required />
          </div>

          <div>
            <label className=" font-semibold">Medical Condition</label>
            <input className="w-full p-2 rounded border border-gray-400 " 
              type="text" value={medicalcondition} onChange={(e) => setMedicalCondition(e.target.value)} required />
          </div>

          <div>
            <label className=" font-semibold">Hospital Status</label>
            <select className="w-full p-2 rounded border border-gray-400 "  
              value={hospitalstatus} onChange={(e) => setHospitalStatus(e.target.value)} required>
                <option value="" disabled >Select Hospital Status</option>
              <option value="Currently Hospitalised">Currently Hospitalised</option>
              <option value="Does not require Hospitalisation">Does not require Hospitalisation</option>
              <option value="Will be Hospitalised soon">Will be Hospitalised soon</option>
              <option value="Recently discharged from Hospital">Recently discharged from Hospital</option>
            </select>
          </div>

          <div>
            <label className=" font-semibold">Hospital Name</label>
            <input className="w-full p-2 rounded border border-gray-400 " 
              type="text" value={hospitalname} onChange={(e) => setHospitalName(e.target.value)} required />
          </div>

          <div>
            <label className=" font-semibold">Enter Your City</label>
            <input className="w-full p-2 rounded border border-gray-400 "  
              type="text" value={city} onChange={(e) => setCity(e.target.value)} required/>
          </div>

          {/* Upload patient Image */}
          <div className="flex flex-col items-center space-y-3">
            <label className="text-gray-700 font-semibold">Add Patient Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPatientImage(e.target.files[0])}
              className="w-[220px] py-2 px-4 rounded-lg text-white bg-blue-600 cursor-pointer hover:bg-blue-700 transition"
            required/>
          </div>

          <button className="w-full py-3 bg-red-900 text-white font-semibold rounded-lg hover:bg-red-800 transition">
            Save and Continue
          </button>
        </form>

       
      </div>
        
    </div>
  );
};

export default FormPatientDetails;
