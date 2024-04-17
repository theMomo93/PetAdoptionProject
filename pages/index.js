import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <section className=" homeBackground bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className=" homeText lg:col-span-7  text-black-900 dark:text-black bg-yellow-900 bg-opacity-50 rounded-lg shadow dark:border p-8 ">
          <h1 className=" max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-6xl">
            A House is not a home without a Pet!
          </h1>
          <p className="max-w-2xl mb-6 font-light text-black-500 lg:mb-8 md:text-lg lg:text-xl dark:text-black-400">
            Here we match our adorable house pets with people to create beautiful relationships lasting a lifetime.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-5 py-3 mb-3 text-base font-medium text-center text-white rounded-lg bg-green-800 hover:bg-blue-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Create an Account
            <svg className="w-5 h-5 ml-2 -mr-1" fill="black" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </Link>
          <a
            href="/adoptus"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-blue-300 rounded-lg hover:bg-green-100 focus:ring-4 bg-green-800 focus:ring-primary-300 dark:text-white dark:border-green-700 dark:hover:bg-blue-700 dark:focus:ring-green-800"
          >
            Find your Pet!
          </a>
        </div>
       
      </div>
      <Footer/>
    </section>
    
  );
}
