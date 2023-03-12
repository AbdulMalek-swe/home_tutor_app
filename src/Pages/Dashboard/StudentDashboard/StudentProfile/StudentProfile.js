import React from 'react';
import img from "../../../../assets/grameenphone.jpg"
const StudentProfile = () => {
    return (
        <div className=' absolute lg:left-[350px] left-[10px] lg:top-[130px] top-[170px] '>
            <div>
                <div>
                    <div className="alert  bg-[#cce5ff]  rounded  ">
                        <div>
                            <span className='text-medium font-normal text-[#004085]'>Dear Tomal welcome to your profile !</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mx-2   mb-2 my-8'>
                <h2 className='mb-2 '>
                    Personal info
                </h2>
                <span className=' border-b-2   border-[#bbbbbb] w-20 block' ></span>
            </div>
            <div>
                <div className="overflow-x-auto">

                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <tbody>
                                <tr className="bg-white border   ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Full name :
                                    </th>
                                    <td className="px-6 py-4 border-l">
                                        Sliver
                                    </td>
                                </tr>

                                <tr className="bg-white border   ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Phone number :
                                    </th>
                                    <td className="px-6 py-4 border-l">
                                        019887345353434
                                    </td>
                                </tr>   <tr className="bg-white border   ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        E-mail :
                                    </th>
                                    <td className="px-6 py-4 border-l">
                                        Sliver
                                    </td>
                                </tr>
                                <tr className="bg-white border   ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Present address :
                                    </th>
                                    <td className="px-6 py-4 border-l">
                                        Sliver
                                    </td>
                                </tr>   <tr className="bg-white border   ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Parmanent address :
                                    </th>
                                    <td className="px-6 py-4 border-l">
                                        Sliver
                                    </td>
                                </tr>   <tr className="bg-white border   ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        NID front part :
                                    </th>
                                    <td className="px-6 py-4 border-l">
                                         <img src={img} width="110px" height="110px" className='border' alt="loadin..."/>
                                    </td>
                                </tr>   <tr className="bg-white border   ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        NID back part:
                                    </th>
                                    <td className="px-6 py-4 border-l">
                                         <img src={img} width="110px" height="110px" className='border' alt="loadin..."/>
 
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;