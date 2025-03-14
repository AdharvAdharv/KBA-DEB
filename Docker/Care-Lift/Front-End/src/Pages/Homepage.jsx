import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import MainImage from '../assets/Images/MainImage.png'
import { Link } from 'react-router-dom'
import FundraiserGrid from '../components/FundraiserGrid'

const Homepage = () => {
  const [patientName,setPatientName]=useState("")
  const [searchResults,setSearchResults]= useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState('')
  
  const SearchPatient= async ()=>{
      if(!patientName){
        alert("Please enter patient name to search");
        return;
      }

      setLoading(true);
    setError("");
    setSearchResults([])

    try {
      const response = await fetch(`/api/searchpatient?name=${patientName}`);
      if (!response.ok) {
        throw new Error("Failed to fetch patient data");
      }
      const data = await response.json();

      setSearchResults(data);
      setSearchResults("")     
    } catch (err) {
      setError("Failed to fetching patient details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <div>
          <Navbar />

          <div className="h-[600px] bg-gradient-to-t from-blue-600 to-white w-full  ">
       
          {/* div for input field and button  */}
          <div className="mt-10 flex justify-center" > 
    <input className="h-[40px] w-[600px] ring ring-black rounded-3xl pl-12"
     value={patientName}
     onChange={(e) =>setPatientName(e.target.value)}
     type="text" placeholder="Search patient by Name" />
     
    <button onClick={SearchPatient} className="h-[40px] w-[150px] ring ring-black rounded-xl ml-[60px] bg-slate-400">
       <span className="text-2xl font-bold">Search</span> </button>
    </div>

     {/* Search Results */}
           <div className="mt-5 flex justify-center">
          {loading && <p className="text-lg text-gray-600">Loading...</p>}
          {error && <p className="text-lg text-red-500">{error}</p>}
        </div> 

        {/* <div className="mt-5 mx-auto w-[80%]">
          {searchResults.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((patient) => (
                <div key={patient.patientId} className="p-4 border rounded-lg shadow-lg bg-white">
                  <img
                    src={patient.image1 ? `data:image/jpeg;base64,${patient.image1}` : "/placeholder-image.jpg"}
                    alt={patient.patientName}
                    className="w-full h-[200px] object-cover rounded-lg"
                  />
                  <h3 className="text-xl font-bold mt-2">{patient.patientName}</h3>
                  <p className="text-gray-700">Condition: {patient.medicalCondition}</p>
                  <p className="text-gray-500">Hospital: {patient.hospitalName}</p>

                  <Link to={`/patient/${patient.patientId}`}>
                    <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                      View Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>  */}
    
     
     {/* left and right side of the body */}
    <div className="flex justify-between ">
    {/* left side of body */}
     <div className=" grid ml-[100px]  mt-[70px]">
        <p className="font-black text-5xl font-serif  ">Need Fund for Your <br></br> Medical Treatment ? </p>
        <p className="text-white text-2xl font-bold ">Raise Money to pay hospital & <br></br>
         Medical bills for free.</p>

         <Link to='/contactus'>
        <button className="bg-green-600 w-[250px] h-[50px] rounded-xl  hover:bg-green-700 transition">
        <span  className="text-white text-xl font-bold " >Contact Us</span></button>
        </Link>
          
         <Link to='/formfundraiser'>
        <button className=" bg-white w-[250px] h-[50px] rounded-xl" >
        <span className=" text-xl font-bold ">Start a free Fundraiser</span></button>
        </Link>     
    
    </div>
      {/* div for image */}
     <div className="pr-[150px] ">
        <img className="mt-[150px] sm:hidden md:block " src={MainImage} alt="image"/>
     </div> 
    </div> 
</div>

<FundraiserGrid />
<Footer />

    </div>
  )
}

export default Homepage