"use client"
import React, { useState, useEffect } from 'react';
import { useInfoStore } from "../store/useInfoStore";

type TextBoxProps = {
    text: string;
    limit?: number;
    delay?: number;
};



export function AnimatedText({ text, limit = 140, delay = 5 }: TextBoxProps) {
    const [displayedText, setDisplayedText] = useState<string>('');
    const [remainingText, setRemainingText] = useState<string>(text);
    const [baseText, setBaseText] = useState<string>(text);
    const [textEnd, setTextEnd] = useState<boolean>(false);

    const [displayBtn, setDisplayBtn] = useState<string>('hidden');
    const [animationNextBtn, setAnimationNextBtn] = useState<string>('animate-fade-in-out');
    
    const { content, setIsPlaying } = useInfoStore();
    
    useEffect(() => {
               
        let currentText = '';
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            if (currentIndex < content.length) {
                currentText += content[currentIndex];
                if (currentText.length <= limit || (currentText.length > limit && baseText[currentIndex] !== ' ')) {

                    setDisplayedText(currentText.toString());
                    content.length <= limit ? setDisplayBtn('') : setDisplayBtn('hidden');
                    content.length <= limit ? setAnimationNextBtn('') : setAnimationNextBtn('animate-fade-in-out');
                    
                } else {
                    setRemainingText(content.slice(currentIndex).toString());
                    setDisplayedText(currentText + '...');
                    clearInterval(intervalId);
                }
                currentIndex++;
            } else {
                clearInterval(intervalId);
                setTextEnd(!textEnd);
                setIsPlaying({isPlaying: false}); 
            }
        }, delay);
        
        

        return () => clearInterval(intervalId);
    }, [content, content, limit, delay]);

    function handlerLoadText() {
        setBaseText(remainingText);

    }

    function handlerBack() {
        setBaseText(content);

    }


    return (
        <div className="relative h-full flex flex-col justify-between">
            <p className="text-sm md:text-lg whitespace-pre-wrap">{displayedText}</p>
            {remainingText && <p style={{ display: 'none' }}>{remainingText}</p>}
            <div className={`${text.length <= limit ? "hidden" : "hidden"} items-center ml-auto gap-3 `}>
                <a onClick={handlerBack} className={`${displayBtn} cursor-pointer animate-fade-in-out`}>voltar</a>
                <div className={`w-4 py-3 none cursor-pointer ${animationNextBtn}  `}>
                    <a onClick={handlerLoadText}  ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 12.05"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="fill-white" d="M8.55,11.45.61,3.5A2,2,0,0,1,2.06,0H17.94a2,2,0,0,1,1.45,3.5l-7.94,8A2.05,2.05,0,0,1,8.55,11.45Z" /></g></g></svg></a>
                </div>
            </div>
        </div>
    );
};


