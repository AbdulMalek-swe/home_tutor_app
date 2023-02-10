import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Main from './Main';
import img from '../assets/grameenphone.jpg'
import { AiOutlineAlignCenter, AiOutlineDashboard } from 'react-icons/ai';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-hot-toast';
import { FaCopy } from 'react-icons/fa';
 
import { CgProfile } from 'react-icons/cg';
import DashboardHome from '../Pages/Dashboard/DashboardHome/DashboardHome';

const DashboardLayout = () => {
    const [copied, setCopied] = useState(false);
    const value = "nice to meet u"
    const notify = () => {

        toast.success(<h1>{value}</h1>);
    };
    return (
        <div>
            <div className="drawer drawer-mobile pt-[120px] "   >
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content flex flex-col items-center justify-start">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <label htmlFor="my-drawer-2" className="btn btn-    lg:hidden "
                    > <AiOutlineAlignCenter/>  </label>
                     
                  
                </div>
                <div className="drawer-side  pt-12    ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content  2">
                        <div className='border-2 relative '>
                            <div className='absolute top-[-50px] left-[70px]  text-center'>
                                <img src={img} alt="loading..." className='h-24 w-24 rounded-full border-2 border-sky-400 z-50 mx-4' />
                                <div  >
                                    <h1 >abdul</h1>
                                    <p>Teacher ID : 1658</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <ul className='pt-20 '>
                                    <div className='pt-8'>
                                    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center   mb-2">JGX</button>
                                        <CopyToClipboard text={value}
                                            onCopy={() => setCopied(true)}>
                                            <span> </span>
                                        </CopyToClipboard>
                                        <CopyToClipboard text={value}
                                            onCopy={() => setCopied(true)}>
                                            <button className='text-white  bg-amber-400 from-purple-600 to-blue-500   focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center my-2 mr-[-5px]  mb-2' onClick={notify}> <FaCopy /> </button>
                                        </CopyToClipboard>
                                    </div>
                                    <Link to="/tutor " className='flex items-center mt-5 text-blue-800 text-lg'>
                                        <AiOutlineDashboard />
                                        <button className='mx-2  hover:underline hover:opacity-90'>
                                            Dashboard </button>
                                    </Link>
                                    <Link to="/tutor/profile" className='flex items-center mt-2 text-blue-800 text-lg mt-5'>
                                    <CgProfile/>
                                        <button className='mx-2  hover:underline hover:opacity-90'>
                                            Profile </button>
                                    </Link>

                                </ul>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default DashboardLayout;