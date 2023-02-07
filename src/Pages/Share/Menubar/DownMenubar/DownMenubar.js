import React from 'react';
import img from '../../../../assets/1663886208-ostadjee main logo Blue.png'
const DownMenubar = () => {
    return (
        <div className='w-full bg-white'>
        <div className='container mx-auto'>
            <div className="navbar bg-base-100 ">
  <div className="flex-1">
    <a className="cursor-pointer  ">
       <img src={img} alt="ostajjii.." className='h-12'/>
    </a>
    <button className=" ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div className="  hidden md:flex">
    <ul className="menu menu-horizontal px-1 list-none">
      <li className='font-medium text-indigo-900 hover:underline hover:bg-indigo-100 list-none'><a>HOME</a></li>
      <li className='font-medium text-indigo-900 hover:underline'><a>BLOG</a></li>
      <li className='font-medium text-indigo-900 hover:underline'><a>HOW IT WORKS</a></li>
    </ul>
  </div>
</div>
        </div>
        </div>
    );
};

export default DownMenubar;