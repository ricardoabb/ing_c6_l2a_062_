"use client"

import React from 'react';


type titleProp = {
    title: string;

};


export function Title({ title = "Phrasal Verbs relating to Health" }: titleProp) {
    

    
    return (
       <h1 className='leading-6 text-3xl md:text-4xl pb-5 mb-8 24 border-b-2 text-center w-full '>{title}</h1>
    )
}