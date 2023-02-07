import React from 'react';
import Slider from 'react-slick';
import img from '../../../assets/grameenphone.jpg'
const data = [
    1,2,3,4,5,6,7,8,9,0
 ]
  
  
  
const FamousCourse = () => {
    var settings = {
        dots:false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='container mx-auto my-[6%]'>
           <div className =' mx-2 border-b-2 mb-2 '>
           <h2 className='mb-2 '> জনপ্রিয় কোর্সসমুহ
            
            </h2>
            <span className=' border-b-2   border-[#e7582a] w-20 block' ></span>
           </div>
            <Slider   {...settings}    >
                {
                    data.map((item,i)=>  <div  >
                     <div className="max-w-sm rounded overflow-hidden shadow-lg border mx-2">
        <img className="w-full" src={img} alt="product" />
        <div className="px-6  ">
          <div className="font-bold text-xl mb-2">title here </div>
          <p className="text-gray-700 text-base">we are lorem lorem </p>
        </div>
        <div className="px-6 py-4 flex items-center justify-between">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            400tk
          </span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3">
            details
          </button>
        </div>
      </div>
                  </div>)
                }
               
            </Slider>
        </div>














       
    );
};

export default FamousCourse;