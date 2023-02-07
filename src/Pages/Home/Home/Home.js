import React  from 'react';
import Banner from '../Banner/Banner';
import FamousBook from '../FamousBook/FamousBook';
import FamousCourse from '../FamousCourse/FamousCourse';
import ServiceArea from '../ServiceArea/ServiceArea';
import TutorCategory from '../TutorCategory/TutorCategory';
const Home = () => {
  return (
    <div>
       <Banner/>
       <ServiceArea/>
      <TutorCategory/>
      <FamousBook/>
      <FamousCourse/>
    </div>
  );
};

export default Home;
 


