import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundData = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
    <h1 className="text-5xl font-bold text-gray-800 mb-4">Fundraiser Not Found</h1>
    <p className="text-xl text-gray-600 mb-8 text-center">
      We couldn't find any fundraiser details for your account.
      It looks like you haven't started a campaign yet.
      Please create a new fundraiser or contact support for assistance.
    </p>
    <Link 
      to="/formfundraiser" 
      className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      Start a Campaign
    </Link>
  </div>
  )
}

export default NotFoundData