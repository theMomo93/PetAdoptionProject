import React from 'react'
import Footer from '@/components/Footer'


export default function AboutUs() {

  return (
    <div>
              <section className="py-10 lg:py-20 bg-stone-100 font-poppins dark:bg-gray-300">
        <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap ">
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                    <div className="lg:max-w-md">
                        <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                            <span className="text-sm text-gray-600 uppercase dark:text-green-900">Who we are?</span>
                            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-green-900">
                            Welcome to PetMatch...
                            </h1>
                        </div>
                        <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-blue-600">
                        ... where we believe in creating lasting bonds between humans and animals. Our mission
                         is to make the adoption process for dogs, cats, rabbits, and other furry friends as safe
                          and easy as possible.
                        </p>
                        <div className="flex flex-wrap items-center">
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6 bg-white dark:bg-gray-900">
                                    <span className="text-blue-500 dark:text-blue-400"></span>
                                    <p class="mt-4 mb-2 text-3xl font-bold text-gray-500 dark:text-yellow-600">1097
                                    </p>
                                    <h2 className="text-sm text-gray-700 dark:text-gray-100">Shelters Cooperation</h2>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-2/2 lg:mb-6">
                                <div className="p-6 bg-white dark:bg-gray-900">
                                    <span className="text-blue-500 dark:text-blue-400">
                                        
                                    </span>
                                    <p class="mt-4 mb-2 text-3xl font-bold text-gray-500 dark:text-yellow-600">3,590
                                    </p>
                                    <h2 className="text-sm text-gray-700 dark:text-gray-100">Animals adopted</h2>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6 bg-white dark:bg-gray-900">
                                    <span className="text-blue-500 dark:text-blue-400">
                                      
                                    </span>
                                    <p class="mt-4 mb-2 text-3xl font-bold text-gray-500 dark:text-yellow-600">74
                                    </p>
                                    <h2 className="text-sm text-gray-700 dark:text-gray-100">Volunteers</h2>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6 bg-white dark:bg-gray-900">
                                    <span className="text-blue-500 dark:text-blue-400">
                                    
                                    </span>
                                    <p class="mt-4 mb-2 text-3xl font-bold text-gray-500 dark:text-yellow-600">100%
                                    </p>
                                    <h2 class="text-sm text-gray-700 dark:text-gray-100">Timing</h2>
                                </div>
                              </div>
                              <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-blue-600">
                              We at PetMatch, understand the importance of the human-animal bond.
                                 We strive to connect loving homes with adorable animals, fostering
                                  relationships that will bring joy and companionship for a lifetime.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 mb-8 lg:w-1/2 lg:mb-0 ">
                <Image src='https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=1851&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

                        className="relative z-40 object-cover w-full h-full rounded-lg"/>
                </div>
            </div>
        </div>
    <h2 className="p-10 pb-0 text-3xl font-black text-gray-700 md:text-5xl dark:text-green-900">Why choose PetMatch?</h2>
        <ul className="p-10">
            <li><span>Easy Adoption Process:</span> We have streamlined the adoption process to make it simple and accessible for everyone.</li>
            <li><span>Caring for Bonds:</span> We believe in the enduring nature of the human-animal bond and work to support it throughout the pets life.</li>
            <li><span>Quality Care:</span> We partner with reputable shelters and organizations to ensure the well-being of every animal.</li>
        </ul>

        <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-blue-600">Join us in making a difference in the lives of both animals and humans. Explore our website, find your perfect companion, and let the journey of a beautiful friendship begin!</p>

      </section>
      <Footer/>
    </div>

 
    
        
  )
}
