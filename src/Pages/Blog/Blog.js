import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';

const Blog = () => {
    return (
        <div className='container mx-auto pt-32'>
            <div className='flex  '>
                <div >
                    <Link to="/" className='flex items-center text-blue-500 hover:text-blue-700 hover:underline'>
                        <AiFillHome />
                        <button  > Home</button>
                    </Link>
                </div>
                <div   className='flex items-center '>
                    <MdArrowForwardIos/>
                    <button  > blog</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <BlogCard /><BlogCard /><BlogCard /><BlogCard /><BlogCard /><BlogCard />
            </div>
        </div>
    );
};

export default Blog;