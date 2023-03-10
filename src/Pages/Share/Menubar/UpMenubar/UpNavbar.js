import React from 'react';
import { AiFillCaretDown, AiFillYoutube, AiFillFacebook, AiFillDashboard } from 'react-icons/ai';
import { GiPhone } from 'react-icons/gi';
import { FaUserAlt, FaEdit, FaRegEdit } from 'react-icons/fa';
import { MdOutlineLogout } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import {  BiLogIn} from 'react-icons/bi';
import { Link } from 'react-router-dom';
const UpNavbar = () => {
    return (
        <div className='bg-indigo-900 min-h-[50px]    '>
            <div className='container mx-auto '>
                <div className="navbar min-h-[0]    ">
                    <div className="flex-1">
                        <a className='flex mt-[-8px]' href='tel:017894xxx'>
                            <GiPhone className='mt-1 font-medium text-white' />
                            <span className='font-medium text-white'> 019 22 xx xx xx</span>
                        </a>
                    </div>
                    <div className="flex-none mt-[-9px]">

                        <ul className='mr-8 text-white list-none    md:flex hidden'>
                            <li className='mr-5 text-white list-none'><a href='https://www.facebook.com/OstadjeeOfficial' target="_blank"><AiFillFacebook /></a></li>
                            <li className='mr-5 text-white list-none'><a href='https://www.youtube.com/c/ZuliasCizarTalukdar' target="_blank"><AiFillYoutube /></a></li>

                        </ul>
                        <div className='mt-1 flex'> 
                        <Link to="/login">
                        <button className='bg-white mx-1 px-1 flex items-center justify-center'><BiLogIn/> <span className='hover:underline'>Login</span></button>
                        </Link>
                        <Link to="/register">
                        <button className='bg-white mx-1 px-1 flex items-center justify-center  bg-orange-400 text-white'><FaRegEdit/> <span className='hover:underline  '>Register</span></button>
                        </Link>
                      </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0}  >
                                <div className='flex cursor-pointer '>
                                    <span className='font-medium text-white'> My Account</span><AiFillCaretDown className='mt-1 font-medium text-white' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-1 p-2 shadow bg-base-100 rounded-box   w-40">
                                <Link to="/tutor">
                                    <li>
                                        <a>
                                            <span><AiFillDashboard /></span>
                                            <span>Dashboard</span>
                                        </a>
                                    </li>
                                </Link >
                                <Link to="/tutor/profile">
                                    <li>
                                        <a>
                                            <span><CgProfile/></span>
                                            <span>My Profile</span>
                                        </a>
                                    </li>
                                </Link>
                                <li>
                                    <a>
                                        <span><FaEdit /></span>
                                        <span>Edit Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span><MdOutlineLogout /></span>
                                        <span>Logout</span>
                                    </a>
                                </li>

                            </ul>  
                         </div>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpNavbar;