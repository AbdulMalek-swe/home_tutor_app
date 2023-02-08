import React  from 'react';
import Banner from '../Banner/Banner';
import FamousBook from '../FamousBook/FamousBook';
import FamousCourse from '../FamousCourse/FamousCourse';
import Media from '../Media/Media';
import ServiceArea from '../ServiceArea/ServiceArea';
import TestiMonial from '../Testimonial/Testimonial/TestiMonial';
 
import TutorCategory from '../TutorCategory/TutorCategory';
const Home = () => {
  return (
    <div>
       <Banner/>
       <ServiceArea/>
      <TutorCategory/>
      <FamousBook/>
      <FamousCourse/>
       <TestiMonial/>
       <Media/>
    </div>
  );
};

export default Home;
 


