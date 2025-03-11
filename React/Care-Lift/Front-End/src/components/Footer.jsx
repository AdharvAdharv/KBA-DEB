import React from 'react'
import { Link } from 'react-router-dom'

import facebookLogo from '../assets/Images/facebook.png'
import emailLogo from '../assets/Images/email.png'
import whatsappLogo from '../assets/Images/WhatsApp logo.png'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">About CareLift</h3>
          <p className="text-gray-300 text-sm">
            CareLift is a crowdfunding platform dedicated to helping individuals
            raise funds for medical emergencies and treatments.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/homepage" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/formfundraiser" className="hover:text-blue-400">Start a Campaign</Link></li>
            <li><Link to="/howitworks" className="hover:text-blue-400">How It Works</Link></li>
            <li><Link to="/aboutus" className="hover:text-blue-400">About Us</Link></li>
            <li><Link to="/contactus" className="hover:text-blue-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact & Social Media Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">Get in Touch</h3>
          <p className="text-gray-300 text-sm">
            Email: <a href="mailto:support@carelift.com" className="hover:text-blue-400">support@carelift.com</a>
          </p>
          <p className="text-gray-300 text-sm">Phone: +123 456 7890</p>

          <div className="flex space-x-4 mt-3">
           
              <img src={facebookLogo} alt="Facebook" className="h-6" />
              <img src={emailLogo} alt="Twitter" className="h-6" />
              <img src={whatsappLogo} alt="Twitter" className="h-6" />
          
            
          
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        &copy; 2025 CareLift. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer