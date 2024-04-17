import Footer from '@/components/Footer'
import React from 'react'
import Link from 'next/link'

import { FaFacebookF } from "react-icons/fa";
import {FaInstagram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"

export default function resources() {
  return (
    <div>
  <div className='container-resources text-center'>
    <h1>10 Golden rules to PetMatch perfectly!:</h1>
    <hr />
    <ol>
      <div className="column-one">
        <li><span>Consider Your Lifestyle:</span> Ensure that the type, size, and energy level of the pet you choose align with your daily routine and living situation. This helps create a harmonious environment for both you and the adopted animal.</li>
        <li><span>Research and Educate Yourself:</span> Learn about the specific needs, behaviors, and potential health issues of the animal you are interested in. Being informed will aid in providing proper care and understanding their unique traits.</li>
        <li><span>Visit the Shelter Personally:</span> Take the time to visit the shelter and spend quality time interacting with the animals. This hands-on experience allows you to gauge compatibility and bond with a potential new family member.</li>
        <li><span>Be Patient and Understanding:</span> Recognize that shelter animals may have had challenging experiences. Be patient, understanding, and prepared to invest time and effort in helping them adjust to their new home.</li>
        <li><span>Complete a Thorough Adoption Process:</span> Cooperate fully with the shelters adoption process. This may include interviews, home visits, and paperwork. A comprehensive process ensures that the animal is going to a suitable and caring home.</li>
      </div>
      <div className="column-two">
        <li><span>Commit to Long-Term Care:</span> Be prepared for the long-term commitment of pet ownership. Consider the potential lifespan of the animal and ensure that you are ready for the responsibilities that come with caring for them throughout their entire life.</li>
        <li><span>Provide a Safe and Comfortable Environment:</span> Create a safe, secure, and comfortable space for your new pet. This includes proper shelter, food, water, and enrichment to stimulate their physical and mental well-being.</li>
        <li><span>Regular Veterinary Care:</span> Schedule regular veterinary check-ups and vaccinations to ensure the health and well-being of your adopted pet. Address any medical issues promptly to prevent them from escalating.</li>
        <li><span>Training and Socialization:</span> Invest time in training and socializing your new pet. This not only helps them adapt to your home but also strengthens the bond between you and encourages positive behavior.</li>
        <li><span>Promote Adoption Advocacy:</span> Share your positive adoption experience with others and encourage them to consider adopting from shelters. Help dispel myths about shelter animals and promote the importance of giving them a second chance at a loving home.</li>
      </div>
    </ol>
  </div>
  <div>
    <h1 className='text-center'>Join us at social media to meet our Crew!</h1>
    <hr/>
    <Link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    </Link>
      <div class="flex m-2 p-4 text-4xl px-8 justify-center ">
      
      <a className='px-4 py-4 bg-blue-500 text-white rounded-full hover:text-blue-600 hover:bg-white' href="#"><FaFacebookF /></a>
          <a className='mx-2 px-4 py-4 bg-pink-600 text-white rounded-full hover:bg-white hover:text-red-600' href="#"><FaInstagram /></a>
          <a className='mx-2 px-4 py-4 bg-blue-600 text-white rounded-full hover:text-blue-600 hover:bg-white' href="#"><FaTwitter /></a>
          <a className='mx-2 px-4 py-4 bg-black text-white rounded-full hover:text-black hover:bg-white' href="#"><FaGithub /></a>
          <a className='mx-2 px-4 py-4 bg-blue-600 text-white rounded-full hover:text-blue-600 hover:bg-white' href="#"><FaLinkedinIn /></a>
      </div>
    </div>
  <Footer/>
</div>


        

  )
}
