"use client"

import React from 'react';
import { useInfoStore } from '../store/useInfoStore';
import { card, intro, final } from "../utils/info";
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

    const { isOpen, setOpen } = useInfoStore();




    return (

        <div id="menu" className="absolute  w-full h-48overflow-hidden bottom-[56px] mb:bottom-0 z-20 " >
            <div className={`m-auto ${isOpen ? "mb-14" : "-mb-[38rem]"} w-fit px-4 pt-4 pb-5 bg-white bg-opacity-10 backdrop-blur-md rounded-t-xl transition-all duration-[.3s] ease-out`}>
                <a className='block text-center w-full pb-2 font-bold text-pink-200 cursor-pointer' onClick={() => {
                    openModal({
                        title: "",
                        meaning: "",
                        content: intro.content
                    })
                    setOpen


                }}>• INÍCIO •</a>
                {card.map((item: { title: string; meaning: string; content: string; }, i: React.Key | null | undefined) => {
                    return <MenuButton key={i} title={item.title} meaning={item.meaning} content={item.content} />
                })}
                <a className='block text-center w-full border-t border-white pt-2 font-bold text-pink-200 cursor-pointer' onClick={() => {
                    openModal({
                        title: "",
                        meaning: "",
                        content: final.content
                    })
                    setOpen


                }}>• CONCLUSÃO •</a>
                
            </div>
            <div className={`fixed bottom-0 text-2xl font-semibold text-center bg-slate-600 left-2/4 -translate-x-2/4 w-full md:w-1/3 p-4 pt-4 mx-auto rounded-t-[9rem] cursor-pointer bg-gradient-to-b from-cyan-500 via-cyan-700 to-violet-950 z-50 select-none ${isOpen ? 'shadow-3xl shadow-purple-500' : 'shadow-none'}  hover:shadow-3xl hover:shadow-purple-500 transition-all ease-in-out`} onClick={setOpen}>
                • PHRASAL VERBS • </div>
        </div >

    )
}