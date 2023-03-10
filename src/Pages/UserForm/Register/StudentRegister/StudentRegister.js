import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

import '../Register.css'
import { inputClass, labelClass } from '../RegisterType';
const StudentRegister = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        delete data.term;
             console.log(data);
             const now = new Date();
const isoString = now.toISOString();
        axios.post("http://20.127.2.107:8080/v1/user/register",{...data, join_date:"2022-02-19T14:21:00+0200"})
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    return (
        <div className='pt-[120px]'>
            <div className="backgrounds">
                <div className='flex items-center justify-center'>
                    <div className='bg-white'>
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                <label for='terms'>I agree to terms and conditions</label>
              </div>
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentRegister;