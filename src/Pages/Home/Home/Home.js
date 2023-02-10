import React from 'react';
import Banner from '../Banner/Banner';
import FamousBook from '../FamousBook/FamousBook';
import FamousCourse from '../FamousCourse/FamousCourse';
import Investor from '../Investor/Investor';
import Media from '../Media/Media';
import Partner from '../Partner/Partner';
import ServiceArea from '../ServiceArea/ServiceArea';
import TestiMonial from '../Testimonial/Testimonial/TestiMonial';

import TutorCategory from '../TutorCategory/TutorCategory';
const Home = () => {
  return (
    <div className='xl:mx-60 lg:mx-36 md:mx-18 sm:mx-1'>
      <Banner />
      <ServiceArea />
      <TutorCategory />
      <FamousBook />
      <FamousCourse />
      <TestiMonial />
      <Media />
      <Investor />
      <Partner />
    </div>
  );
};

export default Home;



