"use client"

import React from 'react';
import { useInfoStore } from '../store/useInfoStore';
import { card } from "../utils/info";
import { MenuButton } from './MenuButton';







type titleProp = {
    title?: string;
    meaning?: string;
    content?: string;
};


export function Menu({ title = "Phrasal Verbs relating to Health", meaning = "", content = "" }: titleProp) {
    const openModal = useInfoStore((state) => state.openModal);
    const closeModal = useInfoStore((state) => state.closeModal);
    //const setOpen = useInfoStore((state) => state.setOpen);
    const { activeId} = useInfoStore();

    const isFirst = 0;
    const isLast = card.length - 1;

    const { isOpen, setOpen } = useInfoStore();

    
    




    return (

        <div className={`absolute ${ activeId <= 0 || activeId === isLast ? 'bottom-[-250px]' : 'bottom-0'}  rounded-none  lg:rounded-t-[80px] w-full lg:w-[750px] pt-4 pb-4  mx-auto bg-opacity-60 z-50 transition-all ease-in-out duration-[.3s]`}>
        <ul className='w-full flex flex-wrap gap-5 lg:gap-10 justify-center items-center  ' >
          {card.map((item, index) => (            
            <li id={`target${index + 1}`} key={index} className="my-0  p-1 md:p-2 bg-[#fff] bg-opacity-50 backdrop-blur-[20px] rounded-full ">
              <div className={`w-5 h-5 sm:w-8 sm:h-8 rounded-full ${activeId === index ? "bg-[#FFF]" : "bg-[#E5985E]"} `}></div>
            </li>          
          ))}  
        </ul>
      </div>

    )
}