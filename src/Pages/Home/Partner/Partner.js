import React from 'react';
import Slider from 'react-slick';
import img from '../../../assets/grameenphone.jpg'
const data = [1, 2, 3, 4,4,56,7]
const Partner = () => {
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
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
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
                    আমাদের পার্টনার
                    </h2>
                    <span className=' border-b-2   border-[#e7582a] w-20 block' ></span>
                     
                </div>
                <Slider   {...settings}    >
                    {
                        data.map((item, i) => <div  className='item-center'>
                            <div className="w-44 h-44  mx-2">
                                <img src={img} alt="Image" className="w-9/12 md:w-full rounded-lg border-2" />
                            </div>
                        </div>
                        )
                    }
                </Slider>

            </div>
        </div>
    );
};

export default Partner;