import React from 'react';
import { inputClass, labelClass } from '../../../UserForm/Register/RegisterType';
 import img from '../../../../assets/grameenphone.jpg'
 
const StudentProfileEdit = () => {
    return (
        <div className='absolute  lg:left-[350px] left-[10px] lg:top-[150px] top-[170px]' >
          
<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class=" ">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <img src={img} alt="loading..."/>  
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 

        </div>
    );
};

export default StudentProfileEdit;