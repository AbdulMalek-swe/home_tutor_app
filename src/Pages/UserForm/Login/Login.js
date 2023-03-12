import axios from 'axios';
import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { BiLogIn } from 'react-icons/bi';
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { inputClass, labelClass } from '../Register/RegisterType';

const Login = () => {
    const { register, handleSubmit, control } = useForm({
        show: true
    });
    const {  show } = useWatch({ control });
    const navigate = useNavigate()
    const onSubmit = data => {
        axios.post("http://20.127.2.107:8080/v1/user/login", data)
            .then(res => {
                navigate("/")
            })
            .catch(error => {
                toast.error(<h1>{error?.response?.data?.message ? error?.response?.data?.message : error?.response?.data}</h1>)
            })
    }
    return (
        <div className='pt-[120px]'>
            <div className="backgrounds">
                <div className='flex items-center justify-center'>
                    <div className='bg-white   my-6'>
                        <h1 className='text-center bg-[#0F2182] p-2 text-[#fff]'>Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-9">
                            <div className="relative my-6">
                                <input id="id-l02" type="tel" required name="message" placeholder="task message" className={inputClass}  {...register("phone")}
                                />
                                <label htmlFor="id-l02" className={labelClass}
                                >
                                    Phone *
                                </label>
                            </div>

                            <div className="relative my-6">
                                <input id="id-l04" type={show ? "text" : "password"} required name="message" placeholder="task message" className={inputClass} {...register("password")}
                                />
                                <label htmlFor="id-l04" className={labelClass}
                                >
                                    Password *
                                </label>
                                <label className="cursor-pointer label  absolute top-0 right-0 text-center">
                                    {show ? <BsEyeSlashFill className='mt-2' /> : <BsEyeFill className='mt-2' />}
                                    <input type="checkbox"
                                        hidden   {...register("show")} />
                                </label>
                            </div>
                            <div className='flex  '>
                                <button type="submit" className='bg-[#0F2182]   p-2 text-[#fff] my-3 flex items-center'> <BiLogIn className='mx-1' /> <span className='pr-1'>Login</span> </button>
                                <Link to="/forget-password">
                                    <span type="submit" className='  p-2   my-3  text-center text-[#E86103] hover:underline hover:text-[#007bff]'>Forgot Password?</span>
                                </Link>
                            </div>
                            <div className='text-center'>
                                <span className="text-[#E86103] ">Have No Account ?</span>
                                <Link to="/register">
                                    <span type="submit" className='  p-2   my-3  text-center  hover:underline  text-[#007bff]'>Register Here</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;