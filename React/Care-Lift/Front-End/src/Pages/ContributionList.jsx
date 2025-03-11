import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ContributionsList = () => {
    const {patientId}= useParams();
  const [contributions, setContributions] = useState([]);
  


  useEffect(() => {
    const fetchContributions = async () => {
      try {
            
        const res = await fetch(`/api/contributions/${patientId}`, {
          method: 'GET',
          credentials: 'include'
        });
        const data = await res.json();
        setContributions(data.contributions);
      } catch (err) {
        console.error("Error fetching contributions:", err);
        setError("Could not fetch contributions");
      }
    };

    fetchContributions();
  }, [patientId]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[90%] md:w-[60%] lg:w-[50%] bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Contributions
        </h2>

        {contributions.length === 0 ? (
          <p className="text-center text-gray-600">No contributions yet.</p>
        ) : (
          <ul className="space-y-4">
            {contributions.map((contrib, index) => (
              <li
                key={index}
                className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md shadow-md"
              >
                <p className="text-lg font-semibold text-gray-800">
                  {contrib.ContribitorName} 
                  <span className="text-gray-500 text-sm"> contributed</span>
                </p>
                <p className="text-xl font-bold text-blue-700">Rs. {contrib.amount}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ContributionsList;
