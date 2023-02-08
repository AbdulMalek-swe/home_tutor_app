import React from 'react';
import { AiTwotoneShop } from 'react-icons/ai';
  const data = [
    "tutor","academy" , "carear" , "cv writting", "shop"
  ]
const ServiceArea = () => {
    return (
        <div className='container mx-auto my-[6%] '>
             <div className='flex flex-wrap items-center justify-center mx-2 p-[30px] md:p-[15px]' style={{ boxShadow: "0 0 8px -3px rgb(41 63 176)"}}>
           {
            data.map((item,i)=>  <div className="p-2  "  >
            <div className='flex items-center justify-center mx-8'>
            <AiTwotoneShop className='p-[6px] text-[32px] border border-[#283eb64d] text-[#e86103]   font-black'/>
            <span className='mx-4 text-[#e86103] text-[20px] font-bold'>{item}</span>
            </div>
            </div>)
           }
             </div>
        </div>
    );
};

export default ServiceArea;