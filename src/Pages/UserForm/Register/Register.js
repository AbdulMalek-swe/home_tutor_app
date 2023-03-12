import axios from 'axios';
import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Link,   useNavigate } from 'react-router-dom';

import './Register.css'
import { inputClass, labelClass } from './RegisterType';
const Register = () => {
    const { register, handleSubmit, control } = useForm();
    const term = useWatch({ control, name: "term" });
    const navigate = useNavigate()
    const onSubmit = data => {
        delete data.term;
        axios.post("http://20.127.2.107:8080/v1/user/register", { ...data, join_date: "2022-02-19T14:21:00+0200" })
            .then(res => {
                console.log(res);
                navigate("/register/verify")
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className='pt-[120px]'>
            <div className="backgrounds">
                <div className='flex items-center justify-center'>
                    <div className='bg-white   my-6'>
                        <h1 className='text-center bg-[#0F2182] p-2 text-[#fff]'>Register</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-6">

                            <div className="relative my-6">
                                <input id="id-l01" type="text" required name="message" placeholder="task message" className={inputClass} {...register("username")}
                                />
                                <label htmlFor="id-l01" className={labelClass}
                                >
                                    Name *
                                </label>
                            </div>
                            <div className="relative my-6">
                                <input id="id-l02" type="tel" required name="message" placeholder="task message" className={inputClass}  {...register("phone")}
                                />
                                <label htmlFor="id-l02" className={labelClass}
                                >
                                    Phone *
                                </label>
                            </div>
                            <div className="relative my-6">
                                <input id="id-l03" type="email" required name="message" placeholder=" " className={inputClass} {...register("email")}
                                />
                                <label htmlFor="id-l03" className={labelClass}
                                >
                                    Email *
                                </label>
                            </div>
                            <div className="relative my-6">
                                <input id="id-l04" type="password" required name="message" placeholder="task message" className={inputClass} {...register("password")}
                                />
                                <label htmlFor="id-l04" className={labelClass}
                                >
                                    Password *
                                </label>
                            </div>
                            <div className='flex  w-full max-w-xs'>
                                <input
                                    className='mr-3'
                                    type='checkbox'
                                    {...register("term")}
                                    id='terms'
                                />
                                <label for='terms'> I agree to the Terms of Use and Privacy Policy</label>
                            </div>
                         
                                      <button disabled={term?false:true} type="submit"   className={` ${term?'bg-[#0F2182]':'bg-[#102493ab]'} p-2 text-[#fff] my-3  text-center w-full `}>Register</button>
                               
                                      <div className='text-center'>
                     <span  className="text-[#E86103] ">Have An Account ?</span>
                       <Link to="/login">
                           <span  type="submit" className= '  p-2   my-3  text-center  hover:underline  text-[#007bff]'>Login Here</span>
                           </Link>
                     </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;