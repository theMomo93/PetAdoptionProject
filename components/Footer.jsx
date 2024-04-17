import React from 'react'
import Link from 'next/link'

    export default function Footer() {
      return (
             
    
    <footer class="border-white-200 dark:bg-green-900">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">PetMatch™</a>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <Link href="aboutus" class="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
                <Link href="#" class="hover:underline me-4 md:me-6">Privacy Policy</Link>
            </li>
            <li>
                <Link href="#" class="hover:underline me-4 md:me-6">Licensing</Link>
            </li>
            <li>
                <Link href="contact" class="hover:underline">Contact</Link>
            </li>
        </ul>
        </div>
    </footer>
    
      )
    }
    
