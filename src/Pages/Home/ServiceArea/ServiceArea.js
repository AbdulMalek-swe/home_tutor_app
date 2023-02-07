import React from 'react';
import { AiTwotoneShop } from 'react-icons/ai';
  const data = [
    1,2,3,4,5
  ]
const ServiceArea = () => {
    return (
        <div className='container mx-auto my-[6%] '>
             <div className='flex flex-wrap items-center justify-center mx-2' style={{ boxShadow: "0 0 8px -3px rgb(41 63 176)"}}>
           {
            data.map((item,i)=>  <div className="  p-5"  >
            <div className='flex items-center justify-center '>
            <AiTwotoneShop className='p-[8px] text-[40px] border border-[#283eb64d] text-[#e86103]   font-black'/>
            <span className='mx-4 text-[#e86103] text-[20px] font-bold'>shop</span>
            </div>
            </div>)
           }
             </div>
        </div>
    );
};

export default ServiceArea;