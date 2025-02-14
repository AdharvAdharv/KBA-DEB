import React from 'react'

const ContactUsLinks = () => {
  return (
    <div class="font-serif mt-20 grid   grid-cols-3">
   
    <div class="place-items-center ">
        <img class="h-[45px] w-[45px]" src="Assets/email logo.png" alt="emaillogo" />
        <p class="text-2xl font-semibold mt-6 mb-2">Email</p>
        <p>Our friendly team is here to help</p>
        <a class="text-fuchsia-900" href="">blockchain@gmail.com</a>
      </div>
     
      <div class="place-items-center ">
        <img class="h-[45px] w-[45px]" src="Assets/location 1.png" alt="emaillogo" />
        <p class="text-2xl font-semibold mt-6 mb-2">Office</p>
        <p>Come say hello to our office HQ</p>
        <a class="text-fuchsia-900" href="">Address</a>
      </div>
      
      <div class="place-items-center ">
        <img class="h-[45px] w-[45px] " src="Assets/phone logo.png" alt="emaillogo" />
        <p class="text-2xl font-semibold mt-6">Phone</p>
        <p class="mt-2">Mon-Fri from 10am to 3pm</p>
        <a class="text-fuchsia-900" href="">1234567890</a>
      </div>
   </div>
  )
}

export default ContactUsLinks