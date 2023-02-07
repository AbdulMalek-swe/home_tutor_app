import React from 'react';
import Slider from 'react-slick';
import img from '../../../assets/grameenphone.jpg'
import './famous.css'
const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0
]
const FamousBook = () => {
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
        <div className='my-[6%]'>
            <div className='container mx-auto'>
                <div className=' mx-2 border-b-2 mb-2'>
                    <h2 className='mb-2 '>জনপ্রিয় বইসমুহ
                    </h2>
                    <span className=' border-b-2   border-[#e7582a] w-20 block' ></span>
                </div>
                <Slider   {...settings}    >
                    {
                        data.map((item, i) => <div  >
                            <div>
                            <div className="overlayContainer relative  border-2 mx-2">
                                <div className='image    '>
                                    <img src={img} alt="Avatar" className=" " />
                                    <div><h1>my name is back</h1></div>
                                </div>
                                <div className="opacity-0 absolute     text-center middle">

                                    <div className=" w-full  ">
                                        <button type="button" className="w-full p-1 my-1 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-lg text-sm  text-center  ">Add to Cart</button>
                                        <button type="button" className="w-full p-1   text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-lg text-sm   text-center  ">View Details</button>
                                    </div>
                                </div>
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

export default FamousBook;