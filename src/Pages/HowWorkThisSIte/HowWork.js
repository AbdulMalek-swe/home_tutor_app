import React, { useState } from 'react';
import { GiTeacher  } from 'react-icons/gi';
import {  RiArrowDropRightLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';
const HowWork = () => {
    const [content, setContent] = useState('tutor');

    const handleClick = (newContent) => {
        setContent(newContent);
    };
    return (
        <div className='container mx-auto pt-32'>
            <div>
                <div className='border rounded p-2'>
                    <div className="flex flex-col">
                        <nav className="flex  border-b-2">
                            <Link to="#" onClick={() => handleClick('tutor')} className={`${content === 'tutor' ? 'bg-slate-200' : ' '} text-blue-500 flex items-center p-4 `}> <GiTeacher /> <span>Tutors</span></Link>
                            <Link to="#" onClick={() => handleClick('stuparent')} className={`${content === 'stuparent' ? 'bg-slate-200' : ' '} text-blue-500 flex items-center mx-2 p-4`}> <GiTeacher />Parents/Students</Link>

                        </nav>
                        <div className='mx-6 my-6'>
                            <h2 className='mb-2 font-bold text-slate-800'>Here's how it works for tutor
                            </h2>
                            <span className=' border-b-2   border-[#e7582a] w-16 block' ></span></div>
                        {content === 'tutor' && (
                             <div className='border'>
                             <div className="collapse">
                                 <input type="checkbox" className="peer" />
                                
                                 <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content flex items-center">
                                 <RiArrowDropRightLine className='text-3xl'/>
                                     <span>Click me to show/hide content</span>
                                 </div>
                                 <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                     <p>hello dear tutor</p>
                                 </div>
                             </div>
                             

                         </div>
                        )}
                        {content === 'stuparent' && (
                            <div className='border'>
                                <div className="collapse">
                                    <input type="checkbox" className="peer" />
                                   
                                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content flex items-center">
                                    <RiArrowDropRightLine className='text-3xl'/>
                                        <span>Click me to show/hide content</span>
                                    </div>
                                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                        <p>hello dear student</p>
                                    </div>
                                </div>
                                

                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWork;