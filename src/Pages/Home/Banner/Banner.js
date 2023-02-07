import React, { useEffect, useState } from 'react';
import img from '../../../assets/1663886208-ostadjee main logo Blue.png'
import img1 from '../../../assets/grameenphone.jpg'
const slides = [
    {
        content:"সহজ শিক্ষা সেরা ভবিষ্যৎ নির্মাণ করে",
        caption:"শিক্ষাকে সহজ করতে তোমার লাগবে ওস্তাদ৷ তাঁর যত্নে যতো কঠিন পাঠ হবে অনুপম, আত্মস্থ হবে নিমিষেই।"
       }, {
        content:"সহজ শিক্ষা সেরা ভবিষ্যৎ নির্মাণ করে",
        caption:"শিক্ষাকে সহজ করতে তোমার লাগবে ওস্তাদ৷ তাঁর যত্নে যতো কঠিন পাঠ হবে অনুপম, আত্মস্থ হবে নিমিষেই।"
       }, {
        content:"সহজ শিক্ষা সেরা ভবিষ্যৎ নির্মাণ করে",
        caption:"শিক্ষাকে সহজ করতে তোমার লাগবে ওস্তাদ৷ তাঁর যত্নে যতো কঠিন পাঠ হবে অনুপম, আত্মস্থ হবে নিমিষেই।"
       },
        
];

const Banner = () => {
    
    return (
        <div className='pt-40 border-2'>
        <div className="carousel w-full  ">
                {
                    slides.map((item, index) => <div key={index} id={`slide${index}`} className="carousel-item relative w-full">
                    
                      <img src={img1} className="w-full h-80" />
                        
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"> 
                            <a href={`#slide${Number(index - 1)}`} className="btn btn-circle">❮</a>
                            <a href={`#slide${index + 1}`} className="btn btn-circle">❯</a>
                        </div>
                        <div className='absolute mx-20 mt-16 max-w-[375px]'>
                          <h3 className='text-2xl mb-8'> {item.content} </h3>
                          <p className='text-base mb-8'>{item.caption}</p>
                          <div>
                          <button className="btn no-animation bg-orange-400 hover:opacity-75 hover:bg-orange-400"> যোগাযোগ</button>
                          <button className="btn no-animation mx-2 bg-red-400 hover:opacity-75 hover:bg-red-400"> অ্যাপ ডাউনলোড করো</button>
                          </div>
                        </div>
                    </div>)
                }
            </div>
           </div>

    );
};

export default Banner;