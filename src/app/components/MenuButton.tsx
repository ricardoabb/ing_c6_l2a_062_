"use client"

import React from 'react';
import { useInfoStore } from '../store/useInfoStore';


type titleProp = {
    title?: string;
    meaning?: string;
    content?: string;

};


export function MenuButton({ title = "Phrasal Verbs relating to Health", meaning = "", content = "" }: titleProp) {
    const openModal = useInfoStore((state) => state.openModal);    
    const setOpen = useInfoStore((state) => state.setOpen);
    
    return (
        <div className='w-full text-center text-xl font-semibold py-2 border-t border-white hover:bg-violet-500 hover:bg-opacity-20 cursor-pointer transition-all ease-out'>
            <button onClick={() => {               
                openModal({
                    title: title,
                    meaning: meaning,
                    content: content,
                })
                setOpen
                
                
            }} >

                {title}</button>
        </div>
    )
}