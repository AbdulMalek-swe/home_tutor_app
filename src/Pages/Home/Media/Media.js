import React from 'react';
import Slider from 'react-slick';
import img from '../../../assets/grameenphone.jpg'
const data = [1, 2, 3, 4]
const Media = () => {
    var settings = {
        infinite: false,
        speed: 200,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 4,
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
        <div className='my-[6%]'>
            <div className='container mx-auto'>
                <div className=' mx-2 border-b-2 mb-2'>
                    <h2 className='mb-2 '>
                    গণমাধ্যমে Ostadjee.com
                    </h2>
                    <span className=' border-b-2   border-[#e7582a] w-20 block' ></span>
                    <h5 className='my-4'>দৈনিক সংবাদপত্র, টেলিভিশন চ্যানেলসহ বিভিন্ন গনমাধ্যমে Ostadjee সম্পর্কে প্রকাশিত বিভিন্ন সংবাদ ও প্রতিবেদনসমুহ</h5>
                </div>
                <Slider   {...settings}    >
                    {
                        data.map((item, i) => <div  >
                            <div className="bg-white mx-2 rounded-lg shadow-lg text-center border-2 ">
                                <img src={img} alt="Image" className="w-full rounded-lg" />
                                <div className='  '>
                                    <button className=" w-full focus:outline-none focus:border-t-2 focus:border-blue-500 py-5      ">
                                       Ostadjee handle it
                                    </button>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </Slider>

            </div>
        </div>
    );
};

export default Media;