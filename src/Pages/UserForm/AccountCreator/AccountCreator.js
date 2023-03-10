import React from 'react';
import { useNavigate, useParams } from 'react-router';
import img from '../../../assets/undraw_mobile_login_re_9ntv.svg'
import StudentRegister from '../Register/StudentRegister/StudentRegister';
const AccountCreator = () => {
    const navigate = useNavigate();
    const { type } = useParams();
  
    // if (type === "candidate") {
    //   return <CandidateRegistration />;
    // }
  
    if (type === "student") {
      return <StudentRegister/>;
    }
  
      return (
          <div className='h-screen pt-14'>
        <h1 className='text-center my-10 text-2xl'>Continue as ...</h1>
        <div className='flex justify-evenly flex-wrap'>
          <div
            onClick={() => navigate("/register/tutor")}
            className='flex flex-col justify-between transition-all rounded-lg p-5 border border-white hover:border-primary hover:shadow-2xl hover:scale-105 group'
          >
            <img className='h-[200px] w-[200px]' src={img} alt='' />
            <p className='text-center text-3xl'>Candidate</p>
          </div>
          <div
            onClick={() => navigate("student")}
            className='flex flex-col justify-between transition-all rounded-lg p-5 border border-white hover:border-primary hover:shadow-2xl hover:scale-105 group'
          >
            <img className='h-[200px] w-[200px]'  src={img} alt='' />
            <p className='text-center text-3xl'>Student </p>
          </div>
        </div>
      </div>
    );
};

export default AccountCreator;