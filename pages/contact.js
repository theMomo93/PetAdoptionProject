import React from 'react'
import Footer from '@/components/Footer'

export default function contact() {

  return (
    <div>

<section class="bg-white dark:bg-gray-100">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-medium text-center text-gray-500 dark:text-black-900 sm:text-xl">Got an issue?  Curious about our adorable animals and their stories? We are all ears and ready to help! Your feedback is like a compass guiding us to improve. Drop us a note and let us make things better together. 🚀🐾</p>
      <form action="mailto:mkaminska93@gmail.com" method="post" enctype="text/plain" class="space-y-8">
    <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Your email</label>
        <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="your Email" required/>
    </div>
    <div>
        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Subject</label>
        <input type="text" name="subject" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
    </div>
    <div class="sm:col-span-2">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black-400">Your message</label>
        <textarea name="message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
    </div>
    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-green-600 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
</form>

  </div>
  <iframe
  src="https://maps.google.com/maps?q=leipzig&t=&z=13&ie=UTF8&iwloc=&output=embed"
  class=" flex-col font-medium p-4 md:p-0 mt-4 border h-72 w-full rounded-lg"
  frameborder="0"
  allowfullscreen>

  </iframe>
</section>
<Footer/>

 </div>



   
  )
}
