import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const StudentHomeDashboard = () => {
    return (
        <div className='absolute  lg:left-[350px] left-[10px] lg:top-[150px] top-[170px] '>
        <div>
          <div>
            <div className="alert  bg-[#cce5ff]  rounded  ">
              <div>
                <span className='text-medium font-normal text-[#004085]'>Dear Tomal welcome to ostadjee.com !</span>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 gap-4 justify-center items-center  '>
          <div className='border-l-4  border-[#0998c9] rounded   my-[12px] shadow-md' style={{ boxShadow: "2px 2px 10px -6px rgb(0 0 0)" }}>
            <Link to="" >
              <div className=' flex justify-center items-center text-[#0998c9] p-[20px] text-xs font-medium'>
                <div className='hover:underline xl:w-[248px]  w-3/4'>
                  <p className='mb-[16px]'>PROFILE</p>
                  <p>UPDATE</p>
                </div>
                <div className=' '>
                  <AiFillEdit className='text-xl' />
                </div>
              </div>
            </Link>
          </div>
          <div className='border-l-4  border-[#0998c9] rounded   my-[12px] shadow-md' style={{ boxShadow: "2px 2px 10px -6px rgb(0 0 0)" }}>
            <Link to="" >
              <div className=' flex justify-center items-center text-[#0998c9] p-[20px] text-xs font-medium'>
                <div className='hover:underline w-32'>
                  <p className='mb-[16px]'>PROFILE</p>
                  <p>UPDATE</p>
                </div>
                <div className=' '>
                  <AiFillEdit className='text-xl' />
                </div>
              </div>
            </Link>
          </div> <div className='border-l-4  border-[#0998c9] rounded   my-[12px] shadow-md' style={{ boxShadow: "2px 2px 10px -6px rgb(0 0 0)" }}>
            <Link to="" >
              <div className=' flex justify-center items-center text-[#0998c9] p-[20px] text-xs font-medium'>
                <div className='hover:underline w-32'>
                  <p className='mb-[16px]'>PROFILE</p>
                  <p>UPDATE</p>
                </div>
                <div className=' '>
                  <AiFillEdit className='text-xl' />
                </div>
              </div>
            </Link>
          </div> <div className='border-l-4  border-[#0998c9] rounded   my-[12px] shadow-md' style={{ boxShadow: "2px 2px 10px -6px rgb(0 0 0)" }}>
            <Link to="" >
              <div className=' flex justify-center items-center text-[#0998c9] p-[20px] text-xs font-medium'>
                <div className='hover:underline w-32'>
                  <p className='mb-[16px]'>PROFILE</p>
                  <p>UPDATE</p>
                </div>
                <div className=' '>
                  <AiFillEdit className='text-xl' />
                </div>
              </div>
            </Link>
          </div>
  
        </div>
        
      </div>
    );
};

export default StudentHomeDashboard;