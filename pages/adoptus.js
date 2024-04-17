import React, { useState } from 'react';
import data from '../pages/api/someData';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function AdoptUs() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="flex flex-wrap">
        {data.animals.map((animal) => (
          <div key={animal.name} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
            <div className="flex flex-col h-full max-w-md mx-auto p-6 border-gray-200 rounded-lg bg-yellow-900 bg-opacity-50">
              <Image
                onClick={() => openModal(animal.image)}
                src={animal.image}
                alt={animal.name}
                className="w-full h-40 object-contain mb-4 cursor-pointer"
              />
              <Link href="#" className="flex-grow">
                <h5 className="text-lg font-semibold text-gray-900 font-bold">{animal.name} </h5>
              </Link>
              <p className="mb-2 text-sm text-white-500 dark:text-white-400 font-semibold">{animal.breed}</p>
              <p className="mb-2 text-sm text-white-500 dark:text-white-400 font-semibold">{animal.size}</p>
              <p className="mb-2 text-sm text-white-500 dark:text-white-400 font-semibold">{animal.personality}</p>
              <a href="login" className="inline-flex items-center text-blue-600 hover:underline">
                To adoption papers
                <svg
                  className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <Image src={selectedImage} alt="Selected Animal for adoption" className="modal-content" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <Footer />
    </>
  );
}
