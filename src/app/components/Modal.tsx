"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInfoStore } from '../store/useInfoStore';







export function Modal() {
  const { isOpen, title, content, closeModal } = useInfoStore();

  //if (!isOpen) return null;
  console.log(isOpen);
  

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`absolute ${isOpen ? 'w-full mb-24 h-[450px] md:h-[356px]'  : 'w-[90%] mb-16 h-auto' } left-2/4 -translate-x-2/4  lg:w-[750px]  mx-auto py-8 pt-14 px-5 rounded-2xl bg-white bg-opacity-5 backdrop-blur-[2px] z-50`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-modal bg-no-repeat bg-cover bg-opacity-50 p-6 rounded shadow-lg w-full h-full flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <div className="relative w-full md:w-auto -mt-8 md:-mt-52">
              <button onClick={closeModal} className="absolute top-[-20px] md:top-[20px] right-0 md:right-[-0px] bg-white shadow-md rounded-full p-6 z-50">
                <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.0156 34.2656H23.7188L15.75 21.3047L7.78125 34.2656H0L11.3672 16.5938L0.726562 0H8.74219L16.125 12.3281L23.3672 0H31.1953L20.4375 16.9922L32.0156 34.2656Z" fill="#410F33" />
                </svg>
              </button>
              <div className="relative ">
                
                {/* <TextBox title={title} content={content} hide={false} /> */}
     
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};    
