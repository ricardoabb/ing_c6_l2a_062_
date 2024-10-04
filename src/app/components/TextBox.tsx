"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/legacy/image';
import { AnimatedText } from "./AnimatedText";

import { useInfoStore } from "../store/useInfoStore";

// Swiper
import { Navigation, A11y } from 'swiper/modules';
import { register, SwiperContainer } from "swiper/element/bundle";
register();

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperClass from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// info json
import { card } from "../utils/info";

// ThreeJs
import dynamic from "next/dynamic";
import { Menu } from './Menu';
import { log } from 'console';
const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false });
// import ThreeScene from './ThreeScene';



type textInfoProp = {
    title?: string;
    meaning?: string;
    content?: string;
    hide?: boolean;
};


export function TextBox() {
    const [realIndex, setIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    //img controll

    // const [imageActive, setImageActive] = useState(false);
    const [loading, setLoading] = useState(true);

    const { isOpen, setOpen } = useInfoStore();
    const [text, setText] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const { content, imageActive, isTranslated, setIsTranslated, setImageActive, setActiveId,  } = useInfoStore();

    const sliderRef: any = useRef<SwiperClass>()
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        setText(content);
    }, [content]);

    const isFirst = card[0];
    const isLast = card.length - 1;



    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
        // setModal({ image1: `${card[swiper.activeIndex].image}`, title: `${card[swiper.activeIndex].title}`, subtitle: `${card[swiper.activeIndex].subtitle}` });
        setActiveId({ activeId: swiper.activeIndex });
        setImageActive({ imageActive: false })
        setIsTranslated({ isTranslated: false })
    };

    const handleImageLoad = () => {
        setLoading(false);
    };
    const test = () => {
        setImageActive({ imageActive: false })
        console.log(imageActive);
    };

    const handleTranslate = () => {
        // setBaseText(baseText === text ? textPt : text);
        console.log('click')
    };


    const setSwiperIndex = (index: number) => {

        // on click
    }

    const handleOnSetSwiper = (index: number) => {
        //const swiper = useSwiper()
        sliderRef.current?.swiper.slideTo(index)
    }

    return (
        <>
            <div id="container" className={`relative flex justify-center items-center 
            ${content ? 'opacity-100' : 'opacity-0'}
            ${activeIndex <= 0 || activeIndex === isLast ? 'w-[100vh] md:w-screen h-[100vh] rounded-none border-none' : 'w-[80vh] md:w-[100vh] h-[80vh] md:h-[100vh] rounded-full'}
            mx-auto mb-[200px] md:mb-0
            
            bg-white bg-opacity-0 backdrop-blur-[10px] border-[#E5985E] border-[1px]
            transition-all ease-in-out duration-[.3s] `}>
                <Swiper
                    onSlideChange={handleSlideChange}
                    modules={[Navigation, A11y]}
                    ref={sliderRef}
                    // navigation
                    onInit={(swiper: any) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    spaceBetween={50}

                    slidesPerView={1}
                    allowTouchMove={true}
                >

                    {card?.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className={`flex flex-col relative justify-center items-center mx-auto text-center overflow-hidden
                         w-[60vh] h-[60vh] md:w-[80vh] md:h-[80vh] min-w-[36rem] min-h-[36rem]
                         px-32 md:p-16 ${activeIndex <= 0 || activeIndex === isLast ? 'bg-gradient-to-t from-[#B04D96] to-[#dcb0d1]' : 'bg-gradient-to-t from-[#E5985E] to-[#F0C185]'} rounded-full`}>

                                    <div id="title" className={`${item.title ? "flex" : "hidden"}    items-center justify-start gap-2 border-sand-500 -mt-14 md:mt-0  `}>
                                        <div id="text">
                                            <h1 className={`font-handlee text-[#fff] uppercase font-bold mb-2 text-[2rem] md:text-[2.5rem] text-center md:mb-5 leading-9 md:leading-10 select-none`}>{item.title}</h1>
                                            {/* <span className=' text-[#fff] font-medium text-[20px] '>{item.meaning}</span> */}
                                        </div>
                                    </div>                                    
                                    <div id="box-container" className={` from-sand-300 to-sand-100 rounded-2xl  shadow-solid mt-[1rem] z-[20]`}>
                                        <div className={`relative text-white text-xl text-sand-500 `}>
                                            <AnimatedText text={item.translation.content} textPt={item.content} limit={activeIndex === 0 ? 200 : 150} />
                                        </div>
                                    </div>
                                    {imageActive && (
                                        <>
                                            <div className=" absolute select-none mx-auto w-[576px] h-[576px] md:w-[900px] md:h-[900px] bg-white bg-opacity-0 backdrop-blur-[10px] overflow-hidden rounded-3xl z-[60]">
                                                <Image
                                                    src={item.image!}
                                                    alt=""
                                                    width={0}
                                                    height={0}
                                                    objectFit='cover'
                                                    sizes='100vh'
                                                    quality={100}
                                                    priority={true}
                                                    unoptimized={true}
                                                    onLoad={handleImageLoad}
                                                    className={`transition-opacity duration-500 ease-in-out ${loading ? 'opacity-0' : 'opacity-100'}`}
                                                />
                                            </div>
                                            <div id='clos-image' className='absolute flex bottom-[100px] z-[100] bg-[#fff] rounded-full p-4 shadow-md'>
                                                <button onClick={test}>
                                                    <svg className='w-10 h-10 fill-[#E5985E]' width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.88916 24.515C-0.153711 25.7175 0.164487 27.4005 1.59988 28.2742C3.03526 29.1478 5.04429 28.8812 6.08716 27.6788L13.6377 18.9727L21.1883 27.6788C22.2311 28.8812 24.2402 29.1478 25.6756 28.2742C27.1109 27.4005 27.4291 25.7175 26.3863 24.515L17.6086 14.3941L26.3862 4.27329C27.4291 3.07083 27.1109 1.38781 25.6755 0.514171C24.2401 -0.35947 22.2311 -0.0929076 21.1882 1.10956L13.6377 9.81554L6.08721 1.10956C5.04434 -0.0929076 3.03531 -0.35947 1.59992 0.514171C0.164533 1.38781 -0.153666 3.07083 0.889206 4.27329L9.66679 14.3941L0.88916 24.515Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </>


                                    )
                                    }
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    <div id="swiper-navigation" className={`absolute ${imageActive ? 'opacity-0 z-1' : 'opacity-100 z-[20]  m-auto left-0 right-0'}
            ${activeIndex <= 0 || activeIndex === isLast ? 'bottom-[0] md:bottom-[80px]' : 'bottom-[0] md:bottom-[80px]'}
             flex items-center justify-between mt-12 mb-4 w-[250px] md:w-[560px] h-[133px] mx-auto transition-all ease-in-out duration-[.3s]`}>

                        <button className={`${sliderRef.current?.swiper.activeIndex == 0 ? "bg-opacity-[.5]" : "opacity-100"} scale-x-[-1] flex justify-center items-center w-14 h-14 bg-[#fff] rounded-full`}
                            //ref={prevRef}
                            disabled={sliderRef.current?.swiper.activeIndex == 0}
                            onClick={() => {
                                setIndex(sliderRef.current?.swiper.realIndex);
                                setIsEnd(sliderRef.current?.swiper.isEnd);
                                sliderRef.current?.swiper.slidePrev();
                            }}>
                            <div >
                                <svg className={` ${activeIndex <= 0 || activeIndex === isLast ? 'fill-[#B04D96]' : 'fill-[#E5985E]'}`} width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.2263 9.60883C14.2579 10.6533 14.2579 12.3467 13.2263 13.3912L4.50948 22.2166C3.47787 23.2611 1.80531 23.2611 0.773705 22.2166C-0.257901 21.1722 -0.257902 19.4788 0.773705 18.4343L7.62263 11.5L0.773705 4.5657C-0.257901 3.52123 -0.2579 1.82782 0.773705 0.783349C1.80531 -0.261117 3.47788 -0.261117 4.50948 0.783349L13.2263 9.60883Z" />
                                </svg>
                            </div>
                        </button>

                        <button className={`${sliderRef.current?.swiper.activeIndex == isLast ? "bg-opacity-[.5]" : "opacity-100"} flex justify-center items-center w-14 h-14 bg-[#fff] rounded-full`}
                            //ref={nextRef}
                            disabled={sliderRef.current?.swiper.activeIndex == isLast}
                            onClick={(swiper: any) => {
                                setIndex(sliderRef.current?.swiper.realIndex);
                                setIsEnd(sliderRef.current?.swiper.isEnd)
                                sliderRef.current?.swiper.slideNext();


                            }}>
                            <div >
                                <svg className={` ${activeIndex <= 0 || activeIndex === isLast ? 'fill-[#B04D96]' : 'fill-[#E5985E]'}`} width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.2263 9.60883C14.2579 10.6533 14.2579 12.3467 13.2263 13.3912L4.50948 22.2166C3.47787 23.2611 1.80531 23.2611 0.773705 22.2166C-0.257901 21.1722 -0.257902 19.4788 0.773705 18.4343L7.62263 11.5L0.773705 4.5657C-0.257901 3.52123 -0.2579 1.82782 0.773705 0.783349C1.80531 -0.261117 3.47788 -0.261117 4.50948 0.783349L13.2263 9.60883Z" />
                                </svg>
                            </div>
                        </button>
       
                    </div>
                </Swiper>





                {/* <ThreeScene /> */}
            </div>
            <Menu sliderRef={sliderRef} />



        </>
    )
}