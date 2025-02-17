import React from 'react'
import Courseimage from '../assets/images/courseImage.jpeg'

const LearnMoreBox = () => {
  return (
    <div class="w-[450px] h-[500px] bg-gray-300 m-auto mt-[100px] mb-[100px] pt-3 rounded shadow-lg shadow-black">
    <img class="rounded m-auto" src={Courseimage} alt="logo" />
    <div class="flex justify-between mt-6">
    <p class="text-fuchsia-900 font-bold  ml-6">$250</p>
    <p class="text-red-700 font-bold ml-28">Rs.25000</p>
    <button class="bg-fuchsia-900 text-white font-bold rounded w-[110px] h-[35px] mr-6">Add to Cart</button>
  </div>
  {/* description */}
  <div class="pl-6">
  <p class="text-fuchsia-900 font-bold text-xl" >Description</p>
  <p>11q</p>
  <p class="text-fuchsia-900 font-bold text-xl">Prereuisites</p>
   <ul class="list-disc list-inside">
        <li>Basic understanding of blockchain echnology</li>
        <li>Familiarity with programming language</li>
        <li>Internet access</li>
    </ul>
    <p class="text-fuchsia-900 font-bold text-xl">Features</p>
    <ul class="list-disc list-inside">
        <li>40 hours of content</li>
        
        <li>Downloadable resources</li>
        <li>24/7 Support</li>
    </ul>
</div>
</div>
  )
}

export default LearnMoreBox