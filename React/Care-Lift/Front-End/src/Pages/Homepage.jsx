import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import MainImage from "../assets/Images/MainImage.png";
import { Link } from "react-router-dom";
import FundraiserGrid from "../components/FundraiserGrid";

const Homepage = () => {
  const [patientName, setPatientName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fundraiserRef = useRef(null); // Create a reference

  const handleInputChange = (e) => {
    setPatientName(e.target.value);
    setError("");
  };

  const SearchPatient = async () => {
    if (!patientName) {
      alert("Please enter patient name to search");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/searchpatient?name=${patientName}`);
      if (!response.ok) {
        throw new Error("Failed to fetch patient data");
      }
      
      
      const data = await response.json();

      setSearchResults(data);
      console.log(searchResults);

      // Scroll to FundraiserGrid after fetching data
      if (fundraiserRef.current) {
        fundraiserRef.current.scrollIntoView({ behavior: "smooth" });
      }
      
    } catch (err) {
      setError("Failed to fetching patient details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

     
      <div className=" h-[600px] bg-gradient-to-t from-blue-600 to-white w-full relative">
        {/* div for input field and button  */}
        <div className="mt-10 flex justify-center relative w-max m-auto">
          <input
            className="h-[40px] w-[600px] ring ring-black rounded-3xl pl-12"
            value={patientName}
            onChange={handleInputChange}
            type="text"
            placeholder="Search patient by Name"
          />

          <button
            onClick={SearchPatient}
            className="h-[40px] w-[150px] ring ring-black rounded-xl ml-[60px] bg-slate-400"
          >
            <span className="text-2xl font-bold">Search</span>
          </button>

          {error && (
            <p className="text-lg text-red-500 absolute -bottom-10 left-[0px]">
              {error}
            </p>
          )}
        </div>

        
        <div className="mt-5 flex justify-center relative">
          {loading && <p className="text-lg text-gray-600">Loading...</p>}
        </div>

        

        {/* left and right side of the body */}
        <div className="flex justify-between relative">
          {/* left side of body */}
          <div className=" flex flex-col gap-6 ml-[100px]  mt-[70px]">
            <p className="font-black text-5xl font-serif  ">
              Need Fund for Your <br></br> Medical Treatment ?
            </p>
            <p className="text-white text-2xl font-bold ">
              Raise Money to pay hospital & <br></br>
              Medical bills for free.
            </p>

            <Link to="/contactus">
              <button className="bg-green-600 w-[250px] h-[50px] rounded-xl  hover:bg-green-700 transition">
                <span className="text-white text-xl font-bold ">
                  Contact Us
                </span>
              </button>
            </Link>

            <Link to="/formfundraiser">
              <button className=" bg-white w-[250px] h-[50px] rounded-xl">
                <span className=" text-xl font-bold ">
                  Start a free Fundraiser
                </span>
              </button>
            </Link>
          </div>
            </div>
          {/* div for image */}
          <div className="pr-[150px] absolute right-[50px] bottom-0 ">
            <img
              className="mt-[150px] sm:hidden md:flex "
              src={MainImage}
              alt="image"
            />
        </div>
      </div>
       
        {/* Fundraiser Grid with Ref */}
      <div ref={fundraiserRef}>
      <FundraiserGrid   patientName={patientName}/>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
