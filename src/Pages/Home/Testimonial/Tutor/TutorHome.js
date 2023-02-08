import React from 'react';
import TutorTestIMonialLeft from './TutorTestIMonialLeft';
import TutorTestimonialRight from './TutorTestimonialRight';

const TutorHome = () => {
    return (
        <div className='container mx-auto my-[6%]'>
               <div className=' mx-2 border-b-2 mb-2'>
                <h2 className='mb-2 '> টিউটরদের টেস্টিমোনিয়াল
                </h2>
                <span className=' border-b-2   border-[#e7582a] w-20 block' ></span>
            </div>

              <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  gap-4 justify-center items-center">
                <TutorTestIMonialLeft  />
                <TutorTestimonialRight/>
              </div>
        </div>
    );
};

export default TutorHome;