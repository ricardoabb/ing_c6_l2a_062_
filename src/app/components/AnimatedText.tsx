"use client"
import React, { useState, useEffect } from 'react';
import { useInfoStore } from "../store/useInfoStore";
import { is } from '@react-three/fiber/dist/declarations/src/core/utils';
import { card } from '../utils/info';

type TextBoxProps = {
  text: string;
  textPt: string;
  limit?: number;
  delay?: number;
};



export function AnimatedText({ text, textPt, limit = 140, delay = 5 }: TextBoxProps) {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [remainingText, setRemainingText] = useState<string>(text);
  const [baseText, setBaseText] = useState<string>(text);
  const [textEnd, setTextEnd] = useState<boolean>(false);

  const { activeId } = useInfoStore();

  const isFirst = 0;
  const isLast = card.length - 1;


  const [displayBtn, setDisplayBtn] = useState<string>('hidden');

  const [animationNextBtn, setAnimationNextBtn] = useState<string>('animate-fade-in-out');

  const { content, setIsTranslated, isTranslated, setImageActive, imageActive } = useInfoStore();


  useEffect(() => {

    setBaseText(baseText === text ? textPt : text);


  }, [isTranslated])

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;


    const intervalId = setInterval(() => {
      if (currentIndex < baseText.length) {
        currentText += baseText[currentIndex];
        if (currentText.length <= limit || (currentText.length > limit && baseText[currentIndex] !== ' ')) {

          setDisplayedText(currentText);
          baseText.length <= limit ? setDisplayBtn('') : setDisplayBtn('hidden');
          baseText.length <= limit ? setAnimationNextBtn('') : setAnimationNextBtn('animate-fade-in-out');
          baseText.length <= limit ? setDisplayBtn('') : setDisplayBtn('hidden');
          //baseText.length <= limit && image1 !== 'undefined' ? setImageActive(true) : setImageActive(false);





        } else {
          setRemainingText(baseText.slice(currentIndex));
          setDisplayedText(currentText + '...');
          clearInterval(intervalId);
        }
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setTextEnd(!textEnd);


      }
    }, delay);


    return () => clearInterval(intervalId);
  }, [baseText, limit, delay,]);

  function handlerLoadText() {
    setBaseText(remainingText);

  }

  function handlerBack() {
    setBaseText(text);
  }

  function handleImage() {
    setImageActive({ imageActive: !imageActive });
  }
  function handleTranslate() {
    setIsTranslated({ isTranslated: !isTranslated });
    // setBaseText(baseText === text ? textPt : text);

  }

  interface TextWithHighlightsProps {
    text: string;
  }

  function TextWithHighlights({ text }: TextWithHighlightsProps): JSX.Element {
    const phrasesToHighlight: string[] = [
      'broke out', 'estourou', 'cleared up', 'desapareceu',
      'coming down', 'pegando', 'fight off', 'combater',
      'keep down', 'manter', 'passed away', 'faleceu',
      'pass on', 'transmitir', 'passed out', 'desmaiou',
      'stuffed up', 'entupido', 'swelled up', 'inchou',
      'throwing up', 'vomitando', 'phrasal verbs in the context of health and well-being',
      'phrasal verbs no contexto da saúde e bem-estar'
    ];

    // Ordenar as frases para evitar conflito de palavras curtas dentro de frases mais longas
    const sortedPhrases = phrasesToHighlight.sort((a, b) => b.length - a.length);

    const regex = new RegExp(`(${sortedPhrases.join('|')})`, 'gi');

    // Substitui as frases encontradas por uma versão com tag <strong>
    const highlightedText = text.split(regex).map((part, index) =>
      sortedPhrases.includes(part.toLowerCase())
        ? <strong key={index}>{part}</strong>
        : part
    );

    return <p className="text-sm md:text-lg whitespace-pre-wrap select-none">{highlightedText}</p>;
  }




  return (
    <div className="relative h-full flex flex-col justify-between w-[100%] z-[9999]">
      {TextWithHighlights({ text: displayedText })}
      {/* <p className="text-sm md:text-lg whitespace-pre-wrap select-none"></p> */}
      {remainingText && <p style={{ display: 'none' }}>{remainingText}</p>}

      <div className={`${text.length <= limit ? "" : ""} flex items-center justify-end gap-3 w-[80%] mt-4 mx-auto pt-2 border-t-[1px] border-[#fff] z-[90] `}>
        <div className='flex gap-8 mr-auto  '>
          {
            activeId > 0 && activeId < isLast ? (
              <a id='btn-image' onClick={handleImage} className='cursor-pointer z-[99]'>
                <svg className='w-[32px]' width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M25.8551 10.8889C25.3028 10.8889 24.8551 11.3366 24.8551 11.8889V12.4444H10.5555C9.45097 12.4444 8.55554 13.3399 8.55554 14.4444V29.1111C8.55554 30.2157 9.45097 31.1111 10.5555 31.1111H30.6667C31.7712 31.1111 32.6667 30.2157 32.6667 29.1111V14.4444C32.6667 13.3399 31.7712 12.4444 30.6667 12.4444H30.3333V11.8889C30.3333 11.3366 29.8856 10.8889 29.3333 10.8889H25.8551ZM27.2222 22.1667C27.2222 25.8179 24.2623 28.7778 20.6111 28.7778C16.9599 28.7778 14 25.8179 14 22.1667C14 18.5154 16.9599 15.5556 20.6111 15.5556C24.2623 15.5556 27.2222 18.5154 27.2222 22.1667Z" fill="white" />
                  <circle cx="21" cy="21" r="20" stroke="white" strokeWidth="2" />
                </svg>
              </a>
            ) : null
          }

          {
            activeId < isLast ? (
              <a id='btn-translate' onClick={handleTranslate} className=' cursor-pointer'>
                <svg className='w-[42px] z-[100]' width="58" height="43" viewBox="0 0 58 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.432 11.25C14.3274 11.25 13.432 12.1454 13.432 13.25V30.25C13.432 31.3546 14.3274 32.25 15.432 32.25H42.432C43.5366 32.25 44.432 31.3546 44.432 30.25V13.25C44.432 12.1454 43.5366 11.25 42.432 11.25H15.432ZM16.432 16.75C15.8797 16.75 15.432 17.1977 15.432 17.75C15.432 18.3023 15.8797 18.75 16.432 18.75H41.432C41.9843 18.75 42.432 18.3023 42.432 17.75C42.432 17.1977 41.9843 16.75 41.432 16.75H16.432ZM16.432 21.25C15.8797 21.25 15.432 21.6977 15.432 22.25C15.432 22.8023 15.8797 23.25 16.432 23.25H31.432C31.9843 23.25 32.432 22.8023 32.432 22.25C32.432 21.6977 31.9843 21.25 31.432 21.25H16.432ZM15.432 26.25C15.432 25.6977 15.8797 25.25 16.432 25.25H20.432C20.9843 25.25 21.432 25.6977 21.432 26.25C21.432 26.8023 20.9843 27.25 20.432 27.25H16.432C15.8797 27.25 15.432 26.8023 15.432 26.25ZM35.432 21.25C34.8797 21.25 34.432 21.6977 34.432 22.25C34.432 22.8023 34.8797 23.25 35.432 23.25H41.432C41.9843 23.25 42.432 22.8023 42.432 22.25C42.432 21.6977 41.9843 21.25 41.432 21.25H35.432ZM23.432 26.25C23.432 25.6977 23.8797 25.25 24.432 25.25H41.432C41.9843 25.25 42.432 25.6977 42.432 26.25C42.432 26.8023 41.9843 27.25 41.432 27.25H24.432C23.8797 27.25 23.432 26.8023 23.432 26.25Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M27.432 0C15.0038 0 4.75969 9.34891 3.34795 21.3982L2.13388 20.1841C1.64573 19.696 0.854271 19.696 0.366116 20.1841C-0.122039 20.6723 -0.122039 21.4637 0.366116 21.9519L0.893727 21.4243L0.366117 21.9519L3.5481 25.1339L4.07843 24.6036L3.5481 25.1339C4.03625 25.622 4.82771 25.622 5.31586 25.1339L4.78553 24.6036L5.31586 25.1339L8.49785 21.9519C8.986 21.4637 8.986 20.6723 8.49785 20.1841C8.00969 19.696 7.21823 19.696 6.73008 20.1841L5.92466 20.9896C7.49766 10.5243 16.528 2.5 27.432 2.5C28.1223 2.5 28.682 1.94036 28.682 1.25C28.682 0.559644 28.1223 0 27.432 0ZM30.432 42.5C42.8602 42.5 53.1043 33.1511 54.5161 21.1018L55.7301 22.3159C56.2183 22.804 57.0097 22.804 57.4979 22.3159C57.9861 21.8277 57.9861 21.0363 57.4979 20.5481L54.3159 17.3661C53.8278 16.878 53.0363 16.878 52.5481 17.3661L49.3662 20.5481C48.878 21.0363 48.878 21.8277 49.3662 22.3159C49.8543 22.804 50.6458 22.804 51.1339 22.3159L51.9394 21.5104C50.3664 31.9757 41.3361 40 30.432 40C29.7417 40 29.182 40.5596 29.182 41.25C29.182 41.9404 29.7417 42.5 30.432 42.5Z" fill="white" />
                </svg>
              </a>
            ) : null
          }
        </div>
        <a onClick={handlerBack} className={`${displayBtn} ${text.length <= limit ? "hidden" : ""} cursor-pointer animate-fade-in-out z-50 `}>voltar</a>
        <div className={`${text.length <= limit ? "hidden" : ""} w-4 py-3 none cursor-pointer ${animationNextBtn}  `}>
          <a onClick={handlerLoadText}  ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 12.05"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="fill-white" d="M8.55,11.45.61,3.5A2,2,0,0,1,2.06,0H17.94a2,2,0,0,1,1.45,3.5l-7.94,8A2.05,2.05,0,0,1,8.55,11.45Z" /></g></g></svg></a>
        </div>
      </div>
    </div>
  );
};


