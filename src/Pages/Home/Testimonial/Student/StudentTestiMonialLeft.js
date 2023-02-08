import React, { useState } from 'react';
import Slider from 'react-slick';
import img from '../../../../assets/grameenphone.jpg'
const data = [1,2,3,4]
const StudentTestiMonialLeft = () => {
    const [selectedButton, setSelectedButton] = useState(0);

    const handleClick = (index) => {
        setSelectedButton(index);
         
    };
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        appendDots: dots => (
            <div
                style={{
                    margin: '-5px',
                    padding: "-3px"
                }}
            >
                <ul style={{
                    margin: "10px",
                }}>  {dots}  </ul>
            </div>
        ),
        customPaging: i => (
            <div>
                <button
                    style={{
                        width: "28px",
                        height: "1px",
                        padding: "2px",
                        background: selectedButton === i ? "blue" : "red"
                    }} onClick={() => handleClick(i)} >  </button>
            </div>

        )
    };
    return (
        <div className='mx-2'>
            <div className='w-full h-60'>
                <Slider {...settings}>
                    {
                        data.map((item, i) => <div>
                            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/jqnCyTKZ4iM" title="YouTube video player" frameborder="0" allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                            <img src={img}   alt="loading.." className='w-full h-60 border border-2 border-indigo-900'/>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    
    );
};

export default StudentTestiMonialLeft;