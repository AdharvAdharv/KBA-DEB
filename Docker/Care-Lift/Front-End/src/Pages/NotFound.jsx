import React from 'react'

const NotFound = () => {
  return (
    <div>
        <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="max-w-md p-8 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-lg text-gray-700 mt-4">Oops! The page you're looking for can't be found.</p>
        <a href="/" className="inline-block mt-6 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">Go Home</a>
    </div>
</div>
    </div>
  )
}

export default NotFound