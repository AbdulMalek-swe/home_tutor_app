import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/grameenphone.jpg'
const BlogCard = () => {
    return (

        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg border-2">
            <Link to="/blog/title">
                <div className="text-slate-100 bg-black hover:bg-[#dc3545] ">
                    <img src={img} alt="loading..." className="w-full h-52 object-cover" />
                    <div className="font-medium text-lg mx-4  hover:underline py-2">this is back i nver thowuskdlfjsdlkafjsdlakfdsa</div>
                </div>
            </Link>
            <div className="py-1">
                <span className="text-sm font-semibold text-gray-700 px-4  ">
                    17 Jun, 2022 
                </span>
                <div className='text-gray-700 px-6'>
                 <p className='py-6'>June 17, 2022 12:17 PM </p> 
                 <p className='pb-6'>this is rule for a description so never thought that u make it easily</p>
                </div>
            </div>
            <div className="px-6 py-4">
                <Link to="/blog/title">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-full">
                    see more
                </button>
                </Link>
               
            </div>
        </div>

    );
};

export default BlogCard;