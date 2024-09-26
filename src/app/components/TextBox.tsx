"use client"

import React, { useEffect, useState } from 'react';
import { AnimatedText } from "./AnimatedText";

import { useInfoStore } from "../store/useInfoStore";

type textInfoProp = {
    title?: string;
    meaning?: string;
    content?: string;
    hide?: boolean;


};

export function TextBox() {
    const { isOpen, setOpen } = useInfoStore();
    const { title, content, meaning, isMuted, closeModal, isPlaying } = useInfoStore();
    const [ text, setText] = useState('');

    useEffect(() => {
        setText(content);
    }, [content]);

    return (
        <div id="container" className={`absolute ${isOpen ? 'mb-24' : 'mb-16 h-auto'} ${content ? 'opacity-100' : 'opacity-0'} w-[90%] md:w-2/3 left-2/4 -translate-x-2/4  lg:w-[750px]  mx-auto py-8 px-5 rounded-2xl bg-white bg-opacity-[8px] backdrop-blur-[20px] z-10 border-purple-400 border-[1px] transition-all ease-in-out duration-[.3s]`}>

            <div id="title" className={`${title ? "flex" : "hidden"}  items-center justify-start gap-2 border-sand-500  `}>
                <div id="text">
                    <h1 className={`font-handlee text-white font-normal text-[1.5rem] md:text-[2.1rem] text-left mb-0 md:mb-5 leading-9 md:leading-10`}>{title}</h1>
                    <span className='font-semibold text-slate-300 text-sm'>({meaning})</span>
                </div>
            </div>

            <div id="box-container" className={`h-full from-sand-300 to-sand-100 rounded-2xl  shadow-solid `}>
                <div className={`text-white text-xl text-sand-500 mt-4`}>
                    <AnimatedText text={content} limit={500} />
                </div>
            </div>

        </div>
    )
}