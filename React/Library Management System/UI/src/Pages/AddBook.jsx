import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AddBook = () => {
  return (
    <>
    <div className="bg-red-100">
      <Navbar />

     
        
          <div className=" flex justify-center">
            {/* box */}
            <div className="bg-white w-[590px] h-[570px] mt-9 font-sans font-semibold  pt-6 pl-12 rounded">
              <p className="text-center text-3xl text-red-900 font-bold font-serif">
                Add Book
              </p>
              <label>Book Name</label>
              <input
                className="w-[500px] h-[28px] rounded mt-2 mb-5 pl-3 ring ring-black"
                type="text"
              />
              <label > Author Name </label>
              <input
                className="w-[500px] h-[28px] rounded mt-2 mb-5 pl-3 ring ring-black"
                type="text"
              />

              <label > Genre</label>
              <select
                className="w-[500px] h-[28px] rounded mt-2 mb-5 pl-3 font-normal ring ring-black    "
                name=""
                id=""
              >
                <option value="course1">Drama</option>
                <option value="">Fiction</option>
              </select>
              <label >Description</label>
              <textarea
                className="mt-2 mb-5 ring ring-black rounded"
                name=""
                id=""
                cols="49"
                rows="3"
              ></textarea>
              <br></br>
              <label >Price</label>
              <br></br>
              <input
                className="w-[500px] h-[28px] rounded mt-2 mb-5 pl-3 ring ring-black"
                type="text"
              />

              <button className="bg-red-900 w-[500px] h-[35px] text-white rounded mt-2 mb-7">
                Add Book
              </button>
            </div>
          </div>
        
     

      <Footer />
      </div>
    </>
  );
};

export default AddBook;
