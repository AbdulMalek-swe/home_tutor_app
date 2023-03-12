import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BiLogIn } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { inputClass, labelClass } from '../Register/RegisterType';

const ForgotVerify = () => {
    const { register, handleSubmit  } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        if(data.email){
            axios.post("http://20.127.2.107:8080/v1/user/verify-email", {code:data.phone,phone:'01977528702'})
            .then(res => {
                console.log(res);
                // navigate("/login")
            })
            .catch(err => {
                console.log(err.message);
            })
        }
        if(data.phone){
            axios.post("http://20.127.2.107:8080/v1/user/verify-phone", {code:data.phone,email:'abdulmalek.swe.585@gmail.com'})
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err.message);
            })
        }
       
    }
    return (
        <div className='pt-[120px]'>
        <div className="backgrounds">
            <div className='flex items-center justify-center'>
                <div className='bg-white   my-6'>
                    <h1 className='text-center bg-[#0F2182] p-2 text-[#fff]'>Reset Password</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-9">
                        <div className="relative my-6">
                            <input id="id-l02" type="tel" required name="message" placeholder="task message" className={inputClass}  {...register("phone")}
                            />
                            <label htmlFor="id-l02" className={labelClass}
                            >
                                Phone token *
                            </label>
                        </div>
                        <div className="relative my-6">
                            <input id="id-l03" type="text" name="message" placeholder="task message" className={inputClass}  {...register("password")}
                            />
                            <label htmlFor="id-l03" className={labelClass}
                            >
                               password *
                            </label>
                        </div> 
                        <div className="relative my-6">
                            <input id="id-l04" type="text" name="message" placeholder="task message" className={inputClass}  {...register("confirm_password")}
                            />
                            <label htmlFor="id-l04" className={labelClass}
                            >
                              Confirm Password *
                            </label>
                        </div> 
                        <div className='flex  '>
                            <button type="submit" className='bg-[#0F2182]   p-2 text-[#fff] my-3 flex items-center'>  <span className='pr-1'>Submit</span> </button>
                          
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ForgotVerify;