import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
const  data =[1,2,3,4]
const SearchJobList = () => {
    return (
        <div>
            <div className='my-6'><button className="btn btn-success">Search Job</button></div>
            <div className='     mb-2'>
                <h2 className='mb-2 text-[#212529] font-semibold font-xl'>
                    Tuition Job List
                </h2>
                <span className=' border-b-2   border-[#212529] w-20 block' ></span>
            </div>
            {
                data.map(item=><div className='border-2 p-6 my-2'>
                <div className='my-4  '>
                    <small className='text-[#6c757d]'>job id:2</small>
                    <p className='text-[#212529]'>need a tutor</p>
                </div>
                <div className='flex justify-between my-4 flex-wrap'>
                    <p className='text-[#e86103]'>Medium : <span className='text-[#212529]'> Class-8</span> </p>
                    <p className='text-[#e86103]'>Class : <span className='text-[#212529]'> Class-8</span> </p>
                    <p className='text-[#e86103]'>Salary : <span className='text-[#212529]'> 9500tk./month</span> </p>
                </div>
                <div className='my-4'>
                    <p className='text-[#212529] font-semibold'>3 days week</p>
                    <p className='flex items-center py-1  '>< MdLocationOn /> <span>Dhanmondi</span> </p>
                    <span>no</span>
                </div>
                <div className='text-right  '>
                   <Link   to="/blog"> <button className=' btn bg-[#28a745] hover:bg-[#28a745] hover:opacity-80 mr-8'>View Details</button></Link>
                    <span className='block font-normal text-xs'>Published Time : 18 june,2022</span>
                </div>
            </div>) 
            }
        </div>
    );
}

export default SearchJobList;