import React from 'react';
import Slider from 'react-slick';
import { IoIosArrowForward } from 'react-icons/io'
import './tutorCategory.css'
const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0
]
const TutorCategory = () => {

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
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
        <div className='container mx-auto'>
            <div className=' mx-2 border-b-2 mb-2'>
                <h2 className='mb-2 '> আমাদের টিউটরদের ক্যাটাগরি

                </h2>
                <span className=' border-b-2   border-[#e7582a] w-20 block' ></span>
            </div>
            <Slider   {...settings}    >
                {
                    data.map((item, i) => <div  >
                        <div className='mx-2 h-20 bg-[#e7582a] rounded text-center  flex items-center justify-center opacity-90 cursor-pointer category-div hover:opacity-80'>
                            <p className='text-white category-text'>this is my bad luch</p>
                            <IoIosArrowForward className='text-white category-text' />
                        </div>
                    </div>)
                }

            </Slider>
        </div>
    );
};

export default TutorCategory;